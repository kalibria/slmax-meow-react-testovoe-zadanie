import Card from '@/app/components/card/Card';
import { ProductInfo } from '@/app/types/types';

export const revalidate = 60;
export const dynamicParams = true;

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
  const id = (await params).id;

  const product: ProductInfo = await fetch(
    `https://675bfd5f9ce247eb19382074.mockapi.io/api/products/${id}`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

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
