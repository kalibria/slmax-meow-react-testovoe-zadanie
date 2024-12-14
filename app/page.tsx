import styles from './page.module.css';
import Card from '@/app/components/card/Card';
import { ProductInfo } from '@/app/types/types';

export const revalidate = 60;

export default async function Home() {
  const products: ProductInfo[] = await fetch(
    'https://675bfd5f9ce247eb19382074.mockapi.io/api/products',
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const itemsCards = products.map((product) => (
    <div key={product.id} className={styles.cardWrapper}>
      <Card product={product} />
    </div>
  ));

  return (
    <div className={styles.page}>
      <main>
        <section className={styles.section}>{itemsCards}</section>
      </main>
      <footer />
    </div>
  );
}
