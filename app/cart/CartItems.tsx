import { getItemsAction } from '@/app/actions/actions';
import CardForCart from '@/app/components/card/cardForCart/CardForCart';
import styles from './cartItems.module.css';

export default async function CartItems() {
  const quantity = await getItemsAction();
  const cartItems = quantity.map((item) => (
    <CardForCart key={item.id} product={item} />
  ));

  return (
    <div className={styles.cartItems}>
      {quantity.length === 0 ? <div>Cart is empty</div> : cartItems}{' '}
    </div>
  );
}
