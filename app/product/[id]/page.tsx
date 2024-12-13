// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
import { ProductInfo } from '@/app/components/card/types';
import Card from '@/app/components/card/Card';

export const revalidate = 10;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const products: ProductInfo[] = await fetch(
    'https://675bfd5f9ce247eb19382074.mockapi.io/api/products'
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
  console.log('params', params);
  const id = (await params).id;
  console.log('id', id);

  const product: ProductInfo = await fetch(
    `https://675bfd5f9ce247eb19382074.mockapi.io/api/products/${id}`,
    {
      method: 'GET',
    }
  ).then((res) => res.json());
  console.log('product', product);

  return (
    <Card
      product={{
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
      }}
    />
  );
}
