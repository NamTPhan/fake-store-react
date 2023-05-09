import React from "react";
import CrossIcon from "../assets/svg/cross.svg";

interface ModalProps {
  modalTitle: string;
  hasCloseButton?: boolean;
  isOpen: boolean;
  onClickClose: (event: React.MouseEvent<HTMLElement>) => void;
  icon?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal = ({
  modalTitle,
  hasCloseButton,
  isOpen,
  onClickClose,
  icon,
  children,
  footer,
}: ModalProps) => {
  if (isOpen) {
    return (
      <div
        className='relative z-10'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            {/* Modal panel */}
            <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                {hasCloseButton && (
                  <div className='flex'>
                    <button className='ml-auto' onClick={onClickClose}>
                      <img src={CrossIcon} alt='close-modal' />
                    </button>
                  </div>
                )}

                <div className='sm:flex sm:items-start'>
                  {icon && (
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10'>
                      <img src={icon} alt='modal-icon' />
                    </div>
                  )}
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <h3
                      id='modal-title'
                      className='text-base font-semibold leading-6 text-gray-900'
                    >
                      {modalTitle}
                    </h3>
                    <div className='mt-2'>{children}</div>
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div />;
};
