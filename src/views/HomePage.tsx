import React from "react";
import { ProductCard } from "../components/ProductCard";
import {
  useGetProductCategoriesQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
} from "../features/apiSlice";

export const HomePage = () => {
  const {
    data: productCategories,
    isLoading: isLoadingCategories,
    isSuccess: hasCategoriesLoaded,
    isError: errorLoadingCategories,
    error: errorCategories,
  } = useGetProductCategoriesQuery();

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  return (
    <div className='min-h-full'>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-3 px-4 sm:px-4 lg:px-6'>
          <h1 className='text-2xl font-bold tracking-tight text-center'>
            Product Store
          </h1>
        </div>
      </header>

      <div className='flex flex-row flex-wrap justify-center mx-5 my-3'>
        <select
          id='categories'
          defaultValue=''
          className='md:hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option value=''>Select a category</option>
          <option
            v-for='category in getProductCategories'
            key='category'
            value='category'
          >
            {}
          </option>
        </select>
        {productCategories?.map(category => (
          <button
            key={category}
            className='hidden md:block group relative h-12 w-48 mr-2 my-2 overflow-hidden rounded-lg bg-white text-lg shadow'
            // onClick="getProductsFromCategory(category)"
          >
            <div className='absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
            <span className='relative text-black group-hover:text-white capitalize'>
              {category}
            </span>
          </button>
        ))}
      </div>
      <div className='flex flex-col md:flex-row justify-center flex-wrap py-4 px-6'>
        <div
          v-for='product in getProducts'
          key='product.id'
          className='flex justify-center mx-2 my-2'
        >
          {/* <ProductCard
            product-id={product.id}
            product-name={product.title}
            price={product.price}
            rating={product.rating}
            thumbnail={product.thumbnail}
            is-favorite={isProductInFavorites(product)}
            onClickAddToCart={favoriteStore.addRemoveFavorite(product)}
            onClickAddToCart={cartStore.addToCart(product)}
          /> */}
        </div>
      </div>
    </div>
  );
};
