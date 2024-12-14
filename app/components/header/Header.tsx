import styles from './header.module.css';
import CartButton from '@/app/components/buttons/cartButton/CartButton';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href={'/'}>Logo Store</Link>
      <CartButton />
    </div>
  );
}
