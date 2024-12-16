import Card from '@/app/components/card/Card';
import { ProductInfo } from '@/app/types/types';
import styles from './page.module.css';
import AddToCartButton from '@/app/components/buttons/addToCartButton/AddToCartButton';

export const revalidate = 0;
// We don't need Full Route Cache (cached HTML). See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const products: ProductInfo[] = await fetch(
    'https://675bfd5f9ce247eb19382074.mockapi.io/api/products',
    { cache: 'no-store' }
  ).then((res) => res.json());

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const product: ProductInfo = await fetch(
    `https://675bfd5f9ce247eb19382074.mockapi.io/api/products/${id}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return (
    <div className={styles.pageWrapper}>
      <AddToCartButton
        product={product}
        title={'Add To Cart'}
        className={styles.button}
      />
      <div className={styles.cardWrapper}>
        <Card
          product={{
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
          }}
        />
      </div>

      <div className={styles.description}>
        Product description: {product.description}
      </div>
    </div>
  );
}
