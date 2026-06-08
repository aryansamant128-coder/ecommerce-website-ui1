import React from 'react';

export  function Categories() {
  const categories = [
    { name: "Men's Apparel", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80" },
    { name: "Women's Fashion", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80" },
    { name: "Accessories", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
  ];

  const styles = {
    section: { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' },
    title: { fontSize: '28px', fontWeight: '700', textCenter: 'center', margin: '0 0 8px 0', color: '#111827', textAlign: 'center' },
    subtitle: { color: '#6b7280', textAlign: 'center', margin: '0 0 40px 0', fontSize: '15px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' },
    card: { position: 'relative', height: '320px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
    img: { width: '100%', height: '100%', objectFit: 'cover' },
    overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', display: 'flex', alignItems: 'flex-end', padding: '24px' },
    catName: { color: '#ffffff', fontSize: '20px', fontWeight: '700', margin: 0 }
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.title}>Shop by Category</h2>
      <p style={styles.subtitle}>Find items sorted dynamically by modern layouts.</p>
      <div style={styles.grid}>
        {categories.map((cat, idx) => (
          <div key={idx} style={styles.card}>
            <img src={cat.img} alt={cat.name} style={styles.img} />
            <div style={styles.overlay}>
              <h3 style={styles.catName}>{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}