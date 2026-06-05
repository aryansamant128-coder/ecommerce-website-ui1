import React from 'react';

export  function Hero() {
  const styles = {
    hero: {
      position: 'relative',
      backgroundColor: '#111827',
      minHeight: '450px',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      color: '#ffffff',
      overflow: 'hidden'
    },
    bgOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.85)), url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    },
    content: { position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 20px', width: '100%' },
    tag: { color: '#818cf8', fontWeight: '700', textTransform: 'uppercase', fontSize: '14px', tracking: '1px', display: 'block', marginBottom: '12px' },
    title: { fontSize: '48px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.1' },
    desc: { fontSize: '18px', color: '#d1d5db', marginBottom: '32px', maxWidth: '500px', lineHeight: '1.5' },
    btn: { backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', padding: '14px 28px', fontSize: '16px', fontWeight: '600', borderRadius: '6px', cursor: 'pointer' }
  };

  return (
    <div style={styles.hero}>
      <div style={styles.bgOverlay} />
      <div style={styles.content}>
        <span style={styles.tag}>Summer Collection 2026</span>
        <h1 style={styles.title}>Redefine Your<br /><span style={{ color: '#818cf8' }}>Everyday Aesthetic</span></h1>
        <p style={styles.desc}>Discover premium clothing, tailored essentials, and curated accents built to turn heads.</p>
        <button style={styles.btn}>Shop Collection</button>
      </div>
    </div>
  );
}