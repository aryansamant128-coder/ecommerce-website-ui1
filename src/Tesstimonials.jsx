import React from 'react';

export  function Testimonials() {
  const reviews = [
    { name: "Sarah Jenkins", text: "The quality of materials here surprised me. Shipping took just 2 days and customer support was lightning fast.", initial: "S" },
    { name: "David K.", text: "Absolutely in love with the canvas backpack. Sleek profile, durable layout, and carries everything effortlessly.", initial: "D" },
  ];

  const styles = {
    bg: { backgroundColor: '#f9fafb', padding: '60px 20px', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6', fontFamily: 'sans-serif' },
    container: { maxWidth: '1200px', margin: '0 auto' },
    heading: { fontSize: '24px', fontWeight: '700', textAlign: 'center', color: '#111827', marginBottom: '40px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' },
    box: { backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    quote: { color: '#4b5563', fontStyle: 'italic', margin: '0 0 20px 0', lineHeight: '1.6' },
    profile: { display: 'flex', alignItems: 'center', gap: '12px' },
    avatar: { width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyOrigin: 'center', fontWeight: '700', fontSize: '14px', justifyContent: 'center' },
    name: { fontSize: '14px', fontWeight: '700', color: '#111827', margin: 0 }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.container}>
        <h2 style={styles.heading}>What Our Community Says</h2>
        <div style={styles.grid}>
          {reviews.map((rev, idx) => (
            <div key={idx} style={styles.box}>
              <p style={styles.quote}>"{rev.text}"</p>
              <div style={styles.profile}>
                <div style={styles.avatar}>{rev.initial}</div>
                <h4 style={styles.name}>{rev.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}