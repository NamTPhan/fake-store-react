import React, { useState } from "react";
import ReactLogo from "../assets/svg/react.svg";
import HeartIcon from "../assets/svg/heart-filled-red.svg";
import CartIcon from "../assets/svg/cart.svg";
import HamburgerMenuIcon from "../assets/svg/outline-bars-3.svg";
import CrossIcon from "../assets/svg/cross-white.svg";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-gray-600'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <img className='h-8 w-8' src={ReactLogo} alt='Your Company' />
            </div>
            <span className='text-white ml-2 cursor-pointer' onClick={() => {}}>
              Fake Store
            </span>
          </div>
          <div className='hidden sm:block'>
            {/* <search-bar
            v-model="searchQuery"
            placeholder="Search in store"
            onClick="searchProducts"
          /> */}
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6 space-x-2'>
              {/* TODO: Remove div hidden  */}
              <div className='hidden'>
                <a
                  href='/'
                  className='text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Login
                </a>

                <button
                  id='user-menu-button'
                  type='button'
                  className='flex max-w-xs items-center mx-2 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>
              <button type='button' onClick={() => {}}>
                <span className='sr-only'>View Favorites</span>
                <img src={HeartIcon} alt='favorite' />
              </button>

              {/* Profile dropdown TODO: Remove hidden  */}
              <div className='hidden relative mx-1'>
                <div
                  className='hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                  tabIndex={-1}
                >
                  <a
                    id='user-menu-item-0'
                    href='/'
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex={-1}
                  >
                    Your Profile
                  </a>
                  <a
                    id='user-menu-item-2'
                    href='/'
                    className='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabIndex={-1}
                  >
                    Sign out
                  </a>
                </div>
              </div>

              <button
                type='button'
                onClick={() => console.log("toggleCartSideBar")}
              >
                <span className='sr-only'>Cart</span>
                <img src={CartIcon} alt='cart' />
              </button>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden space-x-3'>
            <button type='button' onClick={() => {}}>
              <span className='sr-only'>View Favorites</span>
              <img src={HeartIcon} alt='favorite' />
            </button>
            <button
              type='button'
              onClick={() => console.log("toggleCartSideBar")}
            >
              <span className='sr-only'>Cart</span>
              <img src={CartIcon} alt='cart' />
            </button>

            {/* Mobile menu button  */}
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMobileMenuOpen && (
                <img
                  src={HamburgerMenuIcon}
                  alt='menu'
                  onClick={() => setIsMobileMenuOpen(true)}
                />
              )}
              {isMobileMenuOpen && (
                <img
                  src={CrossIcon}
                  alt='close-menu'
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div id='mobile-menu' className='block md:hidden'>
          <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
            {/* <search-bar placeholder="Search in store" /> */}
            {/* TODO: Replace hidden with block  */}
            <a
              href='/'
              className='hidden bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium'
              aria-current='page'
            >
              Favorites
            </a>

            {/* TODO: Replace hidden with block */}
            <a
              href='/'
              className='hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
            >
              Lorem ipsum
            </a>
          </div>
          {/* TODO: Remove hidden  */}
          <div className='hidden border-t border-gray-700 pt-4 pb-3'>
            <div className='space-y-1 px-2'>
              <a
                href='/'
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                Your Profile
              </a>
              <a
                href='/'
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
