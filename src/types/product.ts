export interface Product {
  id: string;
  external_id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  in_stock: boolean;
  created_at: string;
}
