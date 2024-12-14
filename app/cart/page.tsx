import styles from './page.module.css';
import CartItems from '@/app/cart/cartItems/CartItems';
import { getTotalAction } from '@/app/actions/actions';

export default async function Cart() {
  const totalCount = await getTotalAction();
  return (
    <div className={styles.cartWrapper}>
      My Cart
      <CartItems />
      <br />
      <div>Total: {totalCount}</div>
    </div>
  );
}
