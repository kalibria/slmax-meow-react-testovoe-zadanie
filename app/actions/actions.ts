'use server';

import { CartItem } from '@/app/types/types';
import { revalidatePath } from 'next/cache';

globalThis.backendCart = [];

export async function getItemsAction(): Promise<CartItem[]> {
  return globalThis.backendCart;
}

export async function addItemAction(product: CartItem) {
  globalThis.backendCart.push(product);
  revalidatePath('/cart');
}

export async function incrementItemAction(product: CartItem) {
  globalThis.backendCart = globalThis.backendCart.reduce(
    (accum: CartItem[], cartItem) => {
      if (cartItem.id === product.id) {
        cartItem.quantity += 1;
        accum.push(cartItem);
      } else accum.push(cartItem);

      return accum;
    },
    []
  );
  revalidatePath('/cart');
}

export async function removeFromCartAction(item: CartItem) {
  globalThis.backendCart = globalThis.backendCart.filter(
    (cartItem) => cartItem.id !== item.id
  );
}

export async function decreaseQuantityAction(item: CartItem) {
  globalThis.backendCart = globalThis.backendCart.reduce(
    (accum: CartItem[], cartItem) => {
      if (cartItem.id === item.id) {
        if (cartItem.quantity === 1) {
          return accum;
        }
        cartItem.quantity = cartItem.quantity - 1;
        accum.push(cartItem);
      } else accum.push(cartItem);

      return accum;
    },
    []
  );

  revalidatePath('/cart');
}

export async function getTotalAction() {
  const cartItems = globalThis.backendCart;
  return cartItems.reduce((accum, item) => {
    accum += +item.price * item.quantity;
    return accum;
  }, 0);
}
