import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import {
  apiSlice,
  useGetProductCategoriesQuery,
  useGetProductsQuery,
  useLazyGetProductsOfCategoryQuery,
} from "../features/apiSlice";
import { IProduct } from "../interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoriteSlice";
import { addProductToCart } from "../features/productSlice";
import { showSuccessToastLightTheme } from "../helpers/toast";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [selectedProductCategory, setSelectedProductCategory] = useState("");
  const [productList, setProductList] = useState([]);
  const favorites = useSelector((state: any) => state.favorites);
  const products = useSelector((state: any) => state.products);

  const [fetchProductsOfCategory, productsOfCategory] =
    useLazyGetProductsOfCategoryQuery();
  const searchProductList = apiSlice.endpoints.getSearchProducts.useQueryState(
    { searchQuery: products.searchQuery },
    {}
  );

  useEffect(() => {
    setProductList(searchProductList?.data?.products);
  }, [products.searchQuery, searchProductList]);

  const {
    data: allProducts,
    isLoading: isLoadingAllProducts,
    isError: hasProductsError,
  } = useGetProductsQuery();

  useEffect(() => {
    if (selectedProductCategory === "") {
      setProductList(allProducts?.products);
    }
  }, [allProducts?.products, selectedProductCategory]);

  const { data: productCategories, isSuccess: hasCategoriesLoaded } =
    useGetProductCategoriesQuery();

  const addRemoveProductFavorite = (product: IProduct): void => {
    if (isProductInFavorites(product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  const isProductInFavorites = (productId: number): boolean => {
    return favorites.products.some(
      (favorite: IProduct) => favorite.id === productId
    );
  };

  const getProductsOfACategory = (category: string) => {
    fetchProductsOfCategory({ category }).then(res => {
      setSelectedProductCategory(category);
      setProductList(res.data.products);
    });
  };

  return (
    <div className='min-h-full'>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-3 px-4 sm:px-4 lg:px-6'>
          <h1 className='text-2xl font-bold tracking-tight text-center'>
            Product Store
          </h1>
        </div>
      </header>

      {hasCategoriesLoaded && (
        <div className='flex flex-row flex-wrap justify-center mx-5 my-3'>
          <select
            id='categories'
            defaultValue=''
            className='md:hidden capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={e => getProductsOfACategory(e.target.value)}
          >
            <option value=''>Select a category</option>
            {productCategories.map((category: string) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {productCategories.map((category: string) => (
            <button
              key={category}
              className='hidden md:block group relative h-12 w-48 mr-2 my-2 overflow-hidden rounded-lg bg-white text-lg shadow'
              onClick={() => getProductsOfACategory(category)}
            >
              <div className='absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
              <span className='relative text-black group-hover:text-white capitalize'>
                {category.replace("-", " ")}
              </span>
            </button>
          ))}
        </div>
      )}

      {(isLoadingAllProducts || productsOfCategory.isLoading) && (
        <div className='flex justify-center'>
          <div
            className='w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-green-500 border-t-transparent shadow-md'
          />
        </div>
      )}

      <div className='flex flex-col md:flex-row justify-center flex-wrap py-4 px-6'>
        {hasProductsError && productsOfCategory.isError && (
          <h2 className='text-2xl text-center'>
            No products found... Please try again later.
          </h2>
        )}

        {productList?.map((product: IProduct) => (
          <div key={product.id} className='flex justify-center mx-2 my-2'>
            <ProductCard
              productId={product.id}
              productName={product.title}
              price={product.price}
              rating={product.rating}
              thumbnail={product.thumbnail}
              isFavorite={isProductInFavorites(product.id)}
              onClickAddToFavorites={() => addRemoveProductFavorite(product)}
              onClickAddToCart={() => {
                dispatch(addProductToCart(product));
                showSuccessToastLightTheme("Successfully added to cart!");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
