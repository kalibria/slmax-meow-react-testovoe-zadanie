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
    <Card
      key={product.id}
      product={{
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
      }}
    />
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
