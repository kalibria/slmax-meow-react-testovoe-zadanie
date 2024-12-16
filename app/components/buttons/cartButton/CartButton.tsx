import CartIcon from '@/app/assets/icons/CartIcon';
import Link from 'next/link';
import { getCartItemsAction } from '@/app/actions/actions';

export default async function CartButton() {
  const cartProducts = await getCartItemsAction();

  return (
    <div>
      <Link href={`/cart`}>
        <CartIcon />
      </Link>
      <span>{cartProducts.products.length}</span>
    </div>
  );
}
