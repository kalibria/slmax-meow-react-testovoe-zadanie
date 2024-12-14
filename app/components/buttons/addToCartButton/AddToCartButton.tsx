'use client';

import { CartItem, ProductInfo } from '@/app/types/types';
import Button from '@/app/components/buttons/generalButton/Button';
import {
  addItemAction,
  getItemsAction,
  incrementItemAction,
} from '@/app/actions/actions';

type Props = {
  product: ProductInfo;
};

export default function AddToCartButton({ product }: Props) {
  const addToCart = async (product: ProductInfo) => {
    const cartItems = await getItemsAction();
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (productInCart === undefined) {
      const productWithQuantity: CartItem = { ...product, quantity: 1 };
      await addItemAction(productWithQuantity);
    } else {
      await incrementItemAction(productInCart);
    }
  };

  return <Button title={'Add To Cart'} onClick={() => addToCart(product)} />;
}
