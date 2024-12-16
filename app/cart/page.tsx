import styles from './page.module.css';
import CartItems from '@/app/cart/cartItems/CartItems';
import { getItemsAction } from '@/app/actions/actions';

export default async function Cart() {
  const cartInfo = await getItemsAction();

  return (
    <div className={styles.cartWrapper}>
      My Cart
      <CartItems />
      <br />
      <div>Total: {cartInfo.total} $</div>
    </div>
  );
}
