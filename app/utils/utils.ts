import { ProductInfo } from '@/app/types/types';

export async function getData(id: string): Promise<ProductInfo> {
  return await fetch(
    `https://675bfd5f9ce247eb19382074.mockapi.io/api/products/${id}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export async function getUpdatedItems() {
  const cartItemsIds = globalThis.backendCart.products.reduce<string[]>(
    (accum, cartItem) => {
      accum.push(cartItem.id);
      return accum;
    },
    []
  );
  const promises = cartItemsIds.map(async (id) => await getData(id));
  return await Promise.all(promises);
}
