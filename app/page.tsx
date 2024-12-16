import styles from './page.module.css';
import Card from '@/app/components/card/Card';
import { ProductInfo } from '@/app/types/types';
import AddToCartButton from '@/app/components/buttons/addToCartButton/AddToCartButton';
import AddIcon from '@/app/assets/icons/AddIcon';

export const revalidate = 10;

// export const dynamic = 'force-dynamic'; When using force-dynamic html, a page with a list of products will be generated every time a new user visits it, and not taken from the cache, so it will be inappropriate and will put a large load on the server. That's why I use force-dynamic only on the cart page, it is important for the user to see relevant information at the moment.

export default async function Home() {
  const products: ProductInfo[] = await fetch(
    'https://675bfd5f9ce247eb19382074.mockapi.io/api/products',
    { cache: 'no-store' }
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
