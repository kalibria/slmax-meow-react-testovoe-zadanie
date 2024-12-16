import Image from 'next/image';
import styles from './cardForCart.module.css';
import { CartItem } from '@/app/types/types';
import IncreaseDecreaseItem from '@/app/components/increaseDecreaseItem/IncreaseDecreaseItem';

type Props = {
  product: CartItem;
};

export default function CardForCart({ product }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image src={product.img} width={150} height={150} alt={product.name} />
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.text}>{product.name} </p>
        <IncreaseDecreaseItem product={product} />
        <div>{product.price} $</div>
      </div>
    </div>
  );
}
