'use client';
import DeleteIcon from '@/app/assets/icons/DeleteIcon';
import { decreaseQuantityAction } from '@/app/actions/actions';
import { CartItem } from '@/app/types/types';

type Props = {
  product: CartItem;
};

export default function DecreaseItemButton({ product }: Props) {
  return (
    <button onClick={() => decreaseQuantityAction(product)}>
      <DeleteIcon />
    </button>
  );
}
