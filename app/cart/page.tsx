import CartItems from '@/app/cart/CartItems';
import styles from './page.module.css';

export default function Cart() {
  return (
    <div className={styles.cartWrapper}>
      My Cart
      <CartItems />
    </div>
  );
}
