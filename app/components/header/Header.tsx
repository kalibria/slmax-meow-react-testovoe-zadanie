import styles from './header.module.css';
import CartButton from '@/app/components/buttons/cartButton/CartButton';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>Logo Store</div>
      <CartButton />
    </div>
  );
}
