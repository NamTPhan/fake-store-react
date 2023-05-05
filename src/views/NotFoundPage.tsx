import React from "react";

export const NotFoundPage = () => {
  return (
    <main className='grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <h1 className='text-8xl font-semibold text-green-500'>404</h1>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='/'
            className='rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
};
