import React from "react";
import HeartFilledRed from "../assets/svg/heart-filled-red.svg";
import HeartFilledGrey from "../assets/svg/heart-outline-grey.svg";
import { RatingStars } from "./RatingStars/RatingStars";
import { Link } from "react-router-dom";

interface ProductCardProps {
  productId: number;
  productImage: string;
  productName: string;
  rating: number;
  price: number;
  isFavorite: { type: boolean; default: false };
  onClickAddToFavorites: (event: React.MouseEvent<HTMLElement>) => void;
  onClickAddToCart: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ProductCard = ({
  productId,
  productImage,
  productName,
  rating,
  price,
  isFavorite,
  onClickAddToFavorites,
  onClickAddToCart,
}: ProductCardProps) => {
  return (
    <div className='flex flex-col bg-white p-4 w-[300px] h-[350px] shadow-md rounded-lg border border-gray-200'>
      <div className='flex self-center'>
        <Link to={`productinfo/${productId}`}>
          <img
            className='rounded-t-lg h-[150px] cursor-pointer'
            src={productImage}
            alt='productName'
          />
        </Link>
      </div>
      <div className='flex self-center'>
        <h3 className='text-gray-900 font-semibold text-lg tracking-tight'>
          {productName}
        </h3>
      </div>
      <div className='flex mt-2.5 mb-5'>
        <RatingStars rating={rating} />
      </div>
      <div className='flex justify-between'>
        <span className='text-xl font-bold text-gray-900'>
          €&nbsp; {price},-
        </span>
      </div>
      <div className='flex justify-end mt-auto'>
        <button
          className='bg-white hover:text-white rounded-full p-2 text-center'
          onClick={onClickAddToFavorites}
        >
          {isFavorite ? (
            <img src={HeartFilledRed} alt='favorite' />
          ) : (
            <img src={HeartFilledGrey} alt='no-favorite' />
          )}
        </button>
        <button
          className='bg-white hover:text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center'
          onClick={onClickAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
