import styles from './page.module.css';
import CartItems from '@/app/cart/cartItems/CartItems';
import { getCartItemsAction } from '@/app/actions/actions';

export default async function Cart() {
  await getCartItemsAction();
  const cartInfo = await getCartItemsAction();

  return (
    <div className={styles.cartWrapper}>
      My Cart
      <CartItems />
      <br />
      <div>Total: {cartInfo.total} $</div>
    </div>
  );
}
