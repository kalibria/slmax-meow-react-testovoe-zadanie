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

export interface CartInfo {
  products: CartItem[];
  total: number;
}
