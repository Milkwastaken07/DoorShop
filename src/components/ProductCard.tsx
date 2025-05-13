'use client';

import { Product } from '@/types/product';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, width: 250 }}>
      <h3>{product.name}</h3>
      <p><strong>Mã:</strong> {product.external_id}</p>
      <p><strong>Giá:</strong> {product.price.toLocaleString()}₫</p>
      <p><strong>Trạng thái:</strong> {product.in_stock ? 'Còn hàng' : 'Hết hàng'}</p>
      <p><strong>Ngày thêm:</strong> {new Date(product.created_at).toLocaleDateString()}</p>
      <Link href={`/product/${product.id}`}>Xem chi tiết</Link>
    </div>
  );
}
