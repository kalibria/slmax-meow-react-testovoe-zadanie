import IncreaseItemButton from '@/app/components/buttons/increaseItemButton/IncreaseItemButton';
import DecreaseItemButton from '@/app/components/buttons/decreaseItemButton/DecreaseItemButton';
import { CartItem } from '@/app/types/types';
import styles from './increaseDecr.module.css';

type Props = {
  product: CartItem;
};

export default function IncreaseDecreaseItem({ product }: Props) {
  return (
    <div className={styles.buttonsWrapper}>
      <DecreaseItemButton product={product} />
      <span>{product.quantity}</span>
      <IncreaseItemButton product={product} />
    </div>
  );
}
