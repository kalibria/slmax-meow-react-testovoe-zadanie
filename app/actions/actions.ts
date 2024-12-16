'use server';

import { CartInfo, CartItem } from '@/app/types/types';
import { revalidatePath } from 'next/cache';
import { getUpdatedItems } from '@/app/utils/utils';

globalThis.backendCart = { products: [], total: 0 };

export async function getItemsAction(): Promise<CartInfo> {
  await updateCartItems();
  await getTotalAction();
  return globalThis.backendCart;
}

export async function addItemAction(product: CartItem) {
  globalThis.backendCart.products.push(product);
  revalidatePath('/cart');
}

export async function incrementItemAction(product: CartItem) {
  globalThis.backendCart.products = globalThis.backendCart.products.reduce(
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

export async function decreaseQuantityAction(item: CartItem) {
  globalThis.backendCart.products = globalThis.backendCart.products.reduce(
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
  const globalThis = await getItemsAction();
  globalThis.total = globalThis.products.reduce((accum, item) => {
    accum += +item.price * item.quantity;
    return accum;
  }, 0);

  revalidatePath('/cart');
}

export async function updateCartItems() {
  const updatedItems = await getUpdatedItems();
  globalThis.backendCart.products = globalThis.backendCart.products.reduce(
    (accum: CartItem[], cartItem) => {
      const updatedItem = updatedItems.find((item) => item.id === cartItem.id);

      if (updatedItem) {
        accum.push({
          id: cartItem.id,
          img: updatedItem.img,
          price: updatedItem.price,
          name: updatedItem.name,
          description: updatedItem.description,
          quantity: cartItem.quantity,
        });
      }
      return accum;
    },
    []
  );
  revalidatePath('/cart');
}
