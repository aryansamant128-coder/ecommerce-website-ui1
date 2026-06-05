import React from 'react';

export  function Navbar() {
  const styles = {
    nav: { backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 50, fontFamily: 'sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'between', height: '64px', alignItems: 'center' },
    logo: { fontSize: '24px', fontWeight: '800', color: '#4f46e5', letterSpacing: '-0.5px', textDecoration: 'none' },
    logoDark: { color: '#111827' },
    links: { display: 'flex', gap: '32px' },
    link: { textDecoration: 'none', color: '#4b5563', fontWeight: '500', fontSize: '14px' },
    activeLink: { textDecoration: 'none', color: '#4f46e5', fontWeight: '600', fontSize: '14px', borderBottom: '2px solid #4f46e5', paddingBottom: '4px' },
    rightSide: { display: 'flex', alignItems: 'center', gap: '16px' },
    input: { backgroundColor: '#f3f4f6', border: 'none', borderRadius: '9999px', padding: '8px 16px', fontSize: '14px', outline: 'none' }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <a href="#" style={styles.logo}>VOGUE<span style={styles.logoDark}>AURA</span></a>
        
        <div style={styles.links}>
          <a href="#" style={styles.activeLink}>Home</a>
          <a href="#" style={styles.link}>Shop</a>
          <a href="#" style={styles.link}>New Arrivals</a>
          <a href="#" style={styles.link}>Sale</a>
        </div>

        <div style={styles.rightSide}>
          <input type="text" placeholder="Search..." style={styles.input} />
          {/* Native SVG Shopping Bag Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}