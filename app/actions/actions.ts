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
  return globalThis.backendCart.reduce((accum: CartItem[], cartItem) => {
    if (cartItem.id === product.id) {
      cartItem.quantity += 1;
      accum.push(cartItem);
    } else accum.push(product);
    return accum;
  }, []);
}

export async function removeFromCart(item: CartItem) {
  globalThis.backendCart = globalThis.backendCart.filter(
    (cartItem) => cartItem.id !== item.id
  );
}

export async function decreaseQuantity(item: CartItem) {
  return globalThis.backendCart.reduce((accum: CartItem[], cartItem) => {
    if (cartItem.id === item.id) {
      cartItem.quantity -= cartItem.quantity;
      accum.push(cartItem);
    } else accum.push(item);
    return accum;
  }, []);
}
