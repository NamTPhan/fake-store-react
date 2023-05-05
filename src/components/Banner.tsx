import React from "react";
import MegaPhoneIcon from "../assets/svg/mega-phone.svg";
import CrossIcon from "../assets/svg/cross-white.svg";

interface BannerProps {
  mobileMessage: string;
  desktopMessage: string;
  hasCloseButton?: boolean;
  hasActionButton?: boolean;
  learnMoreLink?: string;
}

export const Banner = ({
  mobileMessage,
  desktopMessage,
  hasActionButton,
  hasCloseButton,
  learnMoreLink,
}: BannerProps) => {
  return (
    <div className='bg-amber-400 my-3 rounded-xl'>
      <div className='mx-2 max-w-7xl py-3 px-3'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex w-0 flex-1 items-center'>
            <span className='flex rounded-lg p-2'>
              <img src={MegaPhoneIcon} alt='alert' />
            </span>
            <p className='ml-3 truncate font-medium text-white'>
              <span className='md:hidden'>{mobileMessage}</span>
              <span className='hidden md:inline'>{desktopMessage}</span>
            </p>
          </div>
          {hasActionButton && (
            <div className='order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto'>
              <a
                href={learnMoreLink}
                className='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50'
              >
                Learn more
              </a>
            </div>
          )}
          {hasCloseButton && (
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                type='button'
                className='-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
              >
                <span className='sr-only'>Dismiss</span>
                <img src={CrossIcon} alt='dismiss' />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
