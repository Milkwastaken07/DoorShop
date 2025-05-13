import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

export default async function HomePage() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return <p>Lỗi khi tải sản phẩm: {error.message}</p>;
  }

  return (
    <main>
      <h1>Danh sách cửa gỗ</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {data?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
