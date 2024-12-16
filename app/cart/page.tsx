import styles from './page.module.css';
import CartItems from '@/app/cart/cartItems/CartItems';
import { getCartItemsAction } from '@/app/actions/actions';

// We don't need Full Route Cache (cached HTML). See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// Otherwise the cart gets old prices for the first render after backend prices change
export const dynamic = 'force-dynamic';

export const revalidate = 0;

export default async function Cart() {
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
