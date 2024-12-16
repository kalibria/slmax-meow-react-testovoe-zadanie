'use client';

import { CartItem, ProductInfo } from '@/app/types/types';
import Button from '@/app/components/buttons/generalButton/Button';
import {
  addItemAction,
  getItemsAction,
  incrementItemAction,
} from '@/app/actions/actions';
import { ReactNode } from 'react';

type Props = {
  title?: string;
  product: ProductInfo;
  children?: ReactNode;
  className?: string;
};

export default function AddToCartButton({
  product,
  children,
  title,
  className,
}: Props) {
  const addToCart = async (product: ProductInfo) => {
    const cartItems = await getItemsAction();
    const productInCart = cartItems.products.find(
      (item) => item.id === product.id
    );

    if (productInCart === undefined) {
      const productWithQuantity: CartItem = { ...product, quantity: 1 };
      await addItemAction(productWithQuantity);
    } else {
      await incrementItemAction(productInCart);
    }
  };

  return (
    <Button
      title={title}
      onClick={() => addToCart(product)}
      className={className}
    >
      {children}
    </Button>
  );
}
