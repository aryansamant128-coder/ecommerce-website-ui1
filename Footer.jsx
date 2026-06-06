import React from 'react';

export  function Footer() {
  const styles = {
    footer: { backgroundColor: '#111827', color: '#9ca3af', padding: '48px 20px 24px 20px', fontSize: '14px', fontFamily: 'sans-serif' },
    grid: { maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', borderBottom: '1px solid #1f2937', paddingBottom: '32px' },
    title: { color: '#ffffff', fontSize: '18px', fontWeight: '700', margin: '0 0 16px 0' },
    desc: { lineHeight: '1.5', margin: 0 },
    list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' },
    link: { color: '#9ca3af', textDecoration: 'none' },
    bottom: { maxWidth: '1200px', margin: '24px auto 0 auto', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6b7280' }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        <div>
          <h4 style={{...styles.title, color: '#818cf8'}}>VOGUEAURA</h4>
          <p style={styles.desc}>Premium storefront offering modern design aesthetics for everyday living.</p>
        </div>
        <div>
          <h4 style={styles.title}>Shop</h4>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>Men's Apparel</a></li>
            <li><a href="#" style={styles.link}>Women's Wear</a></li>
            <li><a href="#" style={styles.link}>Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 style={styles.title}>Support</h4>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>Shipping Info</a></li>
            <li><a href="#" style={styles.link}>Returns</a></li>
            <li><a href="#" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div style={styles.bottom}>
        <span>&copy; 2026 VOGUEAURA Inc. All rights reserved.</span>
        <span>Built with pure React UI.</span>
      </div>
    </footer>
  );
}

