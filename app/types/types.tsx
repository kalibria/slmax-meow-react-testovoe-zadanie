export interface ProductInfo {
  id: string;
  img: string;
  price: number;
  name: string;
  description?: string;
}

export interface CartItem extends ProductInfo {
  quantity: number;
}
