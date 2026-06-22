import { useEffect, useState } from 'react';
// 1. FIXED: Changed import name to match your supabaseClient export
import { supabaseClient } from './supabase'; 

import { DEFAULT_CARDS } from './defaultcards';

function Cards() {
  const [products, setProducts] = useState(DEFAULT_CARDS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        // 2. FIXED: Changed 'supabase' to 'supabaseClient' here
        const { data, error } = await supabaseClient
          .from('products')
          .select('*');

        if (error) throw error;

        if (data) {
          setProducts([...DEFAULT_CARDS, ...data]);
        }
      } catch (error) {
        console.error("Error fetching new products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', padding: '20px' }}>Loading products...</p>;

  return (
    <div className="products-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {products.map((item) => (
        <div key={item.id} className="product-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
          <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
          <h3 style={{ margin: '10px 0 5px 0' }}>{item.name}</h3>
          <p style={{ color: '#666', fontSize: '14px', margin: '0 0 10px 0' }}>Category: {item.category}</p>
          <p className="price" style={{ fontWeight: 'bold', color: '#4f46e5', margin: '0' }}>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;