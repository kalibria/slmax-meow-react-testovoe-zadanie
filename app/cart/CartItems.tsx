import { getItemsAction } from '@/app/actions/actions';

export default async function CartItems() {
  const quantity = await getItemsAction();

  console.log('quantity', quantity.length);
  return <div>Items: {quantity.length} </div>;
}
