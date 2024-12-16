import { getCartItemsAction } from '@/app/actions/actions';
import CardForCart from '@/app/components/card/cardForCart/CardForCart';
import styles from './cartItems.module.css';

export default async function CartItems() {
  const cartInfo = await getCartItemsAction();
  const cartItemsComponent = cartInfo.products.map((item) => (
    <CardForCart key={item.id} product={item} />
  ));

  return (
    <div className={styles.cartItems}>
      {cartInfo.products.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        cartItemsComponent
      )}{' '}
    </div>
  );
}
