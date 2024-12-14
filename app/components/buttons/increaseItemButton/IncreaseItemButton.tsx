'use client';
import AddIcon from '@/app/assets/icons/AddIcon';
import { incrementItemAction } from '@/app/actions/actions';
import { CartItem } from '@/app/types/types';

type Props = {
  product: CartItem;
};

export default function IncreaseItemButton({ product }: Props) {
  return (
    <button onClick={() => incrementItemAction(product)}>
      <AddIcon />
    </button>
  );
}
