import React from "react";
import SearchIcon from "../assets/svg/search.svg";

interface SearchBarProps {
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (event: any) => void;
  onClick: (event: any) => void;
}

export const SearchBar = ({
  id,
  name,
  placeholder = "Search...",
  value,
  onChange,
  onClick,
}: SearchBarProps) => {
  return (
    <div className='flex w-full'>
      <input
        id={id}
        className='w-full bg-[#F2F2F2] px-4 py-1 rounded-2xl rounded-r-none focus:outline-none'
        type='text'
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className='bg-[#F2F2F2] rounded-r-3xl h-full'>
        <button
          className='bg-green-500 rounded-full h-full p-2'
          onClick={onClick}
        >
          <img src={SearchIcon} alt='search' />
        </button>
      </div>
    </div>
  );
};
