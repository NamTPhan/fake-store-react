import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: builder => ({
    getProducts: builder.query<any, void>({
      query: () => "/products",
    }),
    getSingleProduct: builder.query<any, { productId: number }>({
      query: arg => {
        const { productId } = arg;
        return {
          url: `/products/${productId}`,
        };
      },
    }),
    getProductsOfCategory: builder.query<any, { category: string }>({
      query: arg => {
        const { category } = arg;
        return {
          url: `/products/category/${category}`,
        };
      },
    }),
    getSearchProducts: builder.query<any, { searchQuery: string }>({
      query: arg => {
        const { searchQuery } = arg;
        return {
          url: "/products/search",
          params: { q: searchQuery },
        };
      },
    }),
    getProductCategories: builder.query<any, void>({
      query: () => "/products/categories",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductCategoriesQuery,
  useGetSingleProductQuery,
  useGetSearchProductsQuery,
  useGetProductsOfCategoryQuery,
} = apiSlice;
