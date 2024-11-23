'use client';

import React, { MouseEvent } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../../components/ui/sheet';
import { useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';

const ShoppingCartModal: React.FC = () => {
  // Destructure necessary properties from `useShoppingCart`
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  // Handle redirect to checkout
  async function handleCheckout(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      console.log(result);
    } catch (error) {
      console.error('Checkout error:', error);
    }
  }

  return (
    <div>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>

          <div className="h-full flex justify-between flex-col">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="my-6 divide-gray-200 divide-y">
                {cartCount === 0 ? (
                  <div className="flex flex-col justify-center mx-auto py-2">
                    <AiOutlineShopping size={100} className="mx-auto" />
                    <h1 className="py-3 text-[24px] text-center">
                      You don&apos;t have any items
                    </h1>
                  </div>
                ) : (
                  Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="py-6 flex">
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product Image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900 max-sm:flex-col">
                            <h3>{entry.name}</h3>
                            <p className="ml-4 max-sm:ml-0 max-sm:my-1">
                              #{entry.price}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.details}
                          </p>
                        </div>

                        <div className="mt-[2px] flex flex-1 items-center justify-between text-sm">
                          <p className="text-gray-500">QTY {entry.quantity}</p>
                          <button
                            type="button"
                            className="font-medium text-black hover:text-black/80"
                            onClick={() => removeItem(entry.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 max-sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>{totalPrice?.toFixed(2)}</p>
              </div>
              <p className="text-sm mt-0.5">
                Shipping and taxes are calculated at checkout
              </p>

              <div className="mt-6">
                <button
                  className="w-full h-[50px] bg-black text-white py-2 px-4 rounded-md hover:bg-black/80"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>

              <div
                className="mt-6 flex justify-center text-center text-sm text-gray-500"
                onClick={() => handleCartClick()}
              >
                <p>
                  OR <button>Continue Shopping</button>
                </p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCartModal;
