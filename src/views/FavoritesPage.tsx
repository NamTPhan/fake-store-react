import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../interfaces/product.interface";
import { removeFavorite } from "../features/favoriteSlice";
import { addProductToCart } from "../features/productSlice";
import { showSuccessToastLightTheme } from "../helpers/toast";

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);

  const removeProductAsFavorite = (productId: number): void => {
    dispatch(removeFavorite(productId));
  };

  const addToCart = product => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className='min-h-full'>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-3 px-4 sm:px-4 lg:px-6'>
          <h1 className='text-2xl font-bold tracking-tight text-center'>
            Favorites
          </h1>
        </div>
      </header>

      <div className='flex flex-col md:flex-row justify-center flex-wrap py-4 px-6'>
        {favorites?.products?.length === 0 && (
          <h2 className='text-2xl text-center'>No favorites found.</h2>
        )}

        {favorites?.products?.map((product: IProduct) => (
          <div key={product.id} className='flex justify-center mx-2 my-2'>
            <ProductCard
              productId={product.id}
              productName={product.title}
              price={product.price}
              rating={product.rating}
              thumbnail={product.thumbnail}
              isFavorite={true}
              isLinkRedirectAReplace={true}
              onClickAddToFavorites={() => removeProductAsFavorite(product.id)}
              onClickAddToCart={() => {
                addToCart(product);
                showSuccessToastLightTheme("Successfully added to cart!");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
