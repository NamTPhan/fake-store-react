import React from "react";
import CrossIcon from "../assets/svg/cross.svg";
import { IProduct } from "../interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../features/productSlice";

interface ShoppingCartSidebarProps {
  isVisible: boolean;
  onClickCheckout?: (event: React.MouseEvent<HTMLElement>) => void;
  onClickClose?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ShoppingCartSidebar = ({
  isVisible,
  onClickCheckout,
  onClickClose,
}: ShoppingCartSidebarProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.products);

  const calculateTotalCartPrice = (): number => {
    const initialValue = 0;
    const sumPrices = cartItems?.cart?.reduce(
      (total: number, amount: number) => (total += amount["price"]),
      initialValue
    );

    return sumPrices;
  };

  if (isVisible) {
    return (
      <div
        className='relative z-10'
        aria-labelledby='slide-over'
        role='dialog'
        aria-modal='true'
      >
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <div className='pointer-events-auto w-screen max-w-md'>
                <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                  <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <h2
                        className='text-lg font-medium text-gray-900'
                        id='slide-over-title'
                      >
                        Shopping cart
                      </h2>
                      <div className='ml-3 flex h-7 items-center'>
                        <button
                          type='button'
                          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                          onClick={onClickClose}
                        >
                          <span className='sr-only'>Close panel</span>
                          <img src={CrossIcon} alt='close-sidebar' />
                        </button>
                      </div>
                    </div>

                    <div className='mt-8'>
                      <div className='flow-root'>
                        {cartItems?.cart?.length === 0 && (
                          <h1 className='text-center'>No products added.</h1>
                        )}

                        <ul className='-my-6 divide-y divide-gray-200'>
                          {cartItems?.cart?.map(
                            (product: IProduct, index: number) => {
                              return (
                                <li
                                  key={product.id + index}
                                  className='flex py-6'
                                >
                                  <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                    <img
                                      src={product.thumbnail}
                                      alt='product thumbnail'
                                      className='h-full w-full object-cover object-center'
                                    />
                                  </div>

                                  <div className='ml-4 flex flex-1 flex-col'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium text-gray-900'>
                                        <h3>{product.title}</h3>
                                        <p className='ml-4'>
                                          €&nbsp;{product.price},-
                                        </p>
                                      </div>
                                      <p className='mt-1 text-sm text-left capitalize text-gray-500'>
                                        Category: {product.category}
                                      </p>
                                    </div>
                                    <div className='flex flex-1 items-end justify-between text-sm'>
                                      <p className='text-gray-500'>Qty 1</p>

                                      <div className='flex'>
                                        <button
                                          type='button'
                                          className='font-medium text-red-500 hover:text-indigo-500'
                                          onClick={() =>
                                            dispatch(
                                              removeProductFromCart(index)
                                            )
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                      <p>Subtotal</p>
                      <p>€&nbsp;{calculateTotalCartPrice()}</p>
                    </div>
                    <p className='mt-0.5 text-sm text-gray-500'>
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className='mt-6'>
                      <button
                        onClick={onClickCheckout}
                        className='flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-500'
                      >
                        Checkout
                      </button>
                    </div>
                    <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                      <p>
                        or{" "}
                        <button
                          type='button'
                          className='font-medium text-sky-500 hover:text-indigo-500'
                          onClick={onClickClose}
                        >
                          Continue Shopping
                          <span aria-hidden='true'> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={onClickClose}
                  className='fixed -z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div />;
};
