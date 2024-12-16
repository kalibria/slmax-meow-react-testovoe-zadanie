import styles from './page.module.css';
import Card from '@/app/components/card/Card';
import { ProductInfo } from '@/app/types/types';
import AddToCartButton from '@/app/components/buttons/addToCartButton/AddToCartButton';
import AddIcon from '@/app/assets/icons/AddIcon';

export const revalidate = 10;

export default async function Home() {
  const products: ProductInfo[] = await fetch(
    'https://675bfd5f9ce247eb19382074.mockapi.io/api/products',
    {
      headers: { 'content-type': 'application/json' },
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const itemsCards = products.map((product) => (
    <div key={product.id} className={styles.cardWrapper}>
      <AddToCartButton product={product} className={styles.button}>
        <AddIcon />
      </AddToCartButton>
      <Card product={product} />
    </div>
  ));

  return (
    <div>
      <main>
        <section className={styles.section}>{itemsCards}</section>
      </main>
      <footer />
    </div>
  );
}
