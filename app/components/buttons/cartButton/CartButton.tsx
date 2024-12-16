import CartIcon from '@/app/assets/icons/CartIcon';
import Link from 'next/link';
import { getItemsAction } from '@/app/actions/actions';

export default async function CartButton() {
  const cartProducts = await getItemsAction();

  return (
    <div>
      <Link href={`/cart`}>
        <CartIcon />
      </Link>
      <span>{cartProducts.products.length}</span>
    </div>
  );
}
