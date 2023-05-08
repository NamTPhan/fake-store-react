import React from "react";
import { Banner } from "../components/Banner";
import { RatingStars } from "../components/RatingStars/RatingStars";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../features/apiSlice";
import { addProductToCart } from "../features/productSlice";
import { useDispatch } from "react-redux";

export const ProductInfoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productId = id as unknown as number;

  const {
    data: product,
    isSuccess,
    isError,
  } = useGetSingleProductQuery({ productId });

  if (isSuccess) {
    return (
      <div className='bg-white'>
        <div className='pt-6'>
          {/* Image gallery  */}
          <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8'>
            <div className='hidden overflow-hidden rounded-lg lg:block'>
              <img
                src={product?.images?.[0]}
                alt='product-1'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
              <div className='overflow-hidden rounded-lg'>
                <img
                  src={product?.images?.[1]}
                  alt='product-2'
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='overflow-hidden rounded-lg'>
                <img
                  src={product?.images?.[2]}
                  alt='product-3'
                  className='h-full w-full object-cover object-center'
                />
              </div>
            </div>
            <div className='sm:overflow-hidden sm:rounded-lg col-span-2'>
              <img
                src={product?.images?.[3]}
                alt='product-4'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>

          {/* Product info  */}
          <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
            <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
              <h1 className='text-2xl font-bold tracking-tight sm:text-3xl capitalize'>
                {product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className='mt-4 lg:row-span-3 lg:mt-0'>
              <h2 className='text-2xl font-bold tracking-tight mb-1'>
                Product information
              </h2>
              <p className='text-2xl tracking-tight'>€&nbsp;{product?.price}</p>

              {/* Rating */}
              <div className='mt-4'>
                <h3 className='sr-only'>Rating</h3>
                <div className='flex items-center'>
                  <RatingStars rating={product?.id} />
                </div>
              </div>

              <div className='mt-5'>
                <div>
                  <h3 className='text-l font-medium'>
                    Stock: {product?.stock}
                  </h3>
                  <h3 className='text-l font-medium'>
                    Discount: {product?.discountPercentage}&nbsp;%
                  </h3>
                </div>

                <button
                  className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-3 px-8 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  onClick={() => dispatch(addProductToCart(product))}
                >
                  Add to Cart
                </button>

                <Banner
                  mobileMessage='Free shipping over €&nbsp;100'
                  desktopMessage='Free shipping on orders over €&nbsp;100'
                />
              </div>
            </div>

            <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
              {/* Description and details */}
              <div>
                <h3 className='sr-only'>Description</h3>

                <div className='space-y-6'>
                  <p className='text-base text-gray-900'>
                    {product?.description}
                  </p>
                </div>
              </div>

              <div className='mt-10'>
                <h2 className='text-xl font-medium text-gray-900'>Details</h2>

                <div className='mt-4 space-y-2'>
                  <p className='text-md text-gray-600'>
                    Brand:&nbsp;{product?.brand}
                  </p>
                  <p className='text-md capitalize text-gray-600'>
                    Category:&nbsp;{product?.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex justify-center m-2'>
        <h2 className='text-2xl text-center'>
          No product found... Please try again later.
        </h2>
      </div>
    );
  }

  return (
    <div className='flex justify-center m-2'>
      <div
        className=' w-12 h-12 rounded-full animate-spin
            border-4 border-solid border-green-500 border-t-transparent shadow-md'
      />
    </div>
  );
};
