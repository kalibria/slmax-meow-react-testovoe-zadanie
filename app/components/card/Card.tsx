import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ProductInfo } from '@/app/types/types';

type Props = {
  product: ProductInfo;
};

export default function Card({ product }: Props) {
  const { img, name, price, id } = product;

  return (
    <Link href={`/product/${id}`} className={styles.card}>
      <Image src={img} alt={name} width={300} height={300} />
      <div>Price {price}</div>
      <div>Label {name}</div>
    </Link>
  );
}
