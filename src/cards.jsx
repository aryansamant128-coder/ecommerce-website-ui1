import React from 'react';

export default function ProductCards() {
  const products = [
    { id: 1, name: "Minimalist Leather Watch", price: "$189.00", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Premium Cotton Hoodie", price: "$85.00", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Urban Canvas Backpack", price: "$120.00", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "Classic Matte Sunglasses", price: "$65.00", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&q=80" },
  ];

  const styles = {
    section: { padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' },
    card: { backgroundColor: '#ffffff', border: '1px solid #f3f4f6', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
    imgBox: { backgroundColor: '#f9fafb', aspectRatio: '1', overflow: 'hidden' },
    img: { width: '100%', height: '100%', objectFit: 'cover' },
    info: { padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1, justifyContent: 'space-between' },
    pName: { fontSize: '15px', fontWeight: '600', color: '#111827', margin: 0 },
    row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' },
    price: { fontSize: '16px', fontWeight: '700', color: '#111827' },
    btn: { backgroundColor: '#111827', color: '#ffffff', border: 'none', padding: '6px 12px', fontSize: '12px', fontWeight: '600', borderRadius: '4px', cursor: 'pointer' }
  };

  return (
    <div style={styles.section}>
      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <div style={styles.imgBox}>
              <img src={p.img} alt={p.name} style={styles.img} />
            </div>
            <div style={styles.info}>
              <h3 style={styles.pName}>{p.name}</h3>
              <div style={{color: '#f59e0b', fontSize: '12px'}}>★★★★★</div>
              <div style={styles.row}>
                <span style={styles.price}>{p.price}</span>
                <button style={styles.btn}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}