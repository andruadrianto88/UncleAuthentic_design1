import React from 'react';

const SocialProof = () => {
  const testimonials = [
    {
      text: "The most authentic tasting chicken rice in Adelaide. The rice is so flavorful and the chicken is incredibly tender!",
      author: "Satisfied Customer",
      platform: "UberEats Review"
    },
    {
      text: "Friendly service and the food is consistently amazing. That chili sauce is a game changer!",
      author: "Local Regular",
      platform: "Google Review"
    },
    {
      text: "Best Hainanese Chicken Rice outside of Singapore. Absolute hidden gem in the CBD.",
      author: "Foodie Adelaide",
      platform: "Instagram"
    }
  ];

  return (
    <section id="social" style={{ backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Words From Our Guests</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-chili-red)', margin: '0 auto 40px' }}></div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '40px',
              backgroundColor: 'var(--color-light-gray)',
              borderRadius: '16px',
              position: 'relative',
              textAlign: 'left',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <span style={{ 
                fontSize: '4rem', 
                color: 'var(--color-chili-red)', 
                opacity: 0.1, 
                position: 'absolute', 
                top: '10px', 
                left: '20px',
                fontFamily: 'serif'
              }}>"</span>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.7', position: 'relative' }}>
                {t.text}
              </p>
              <div>
                <strong style={{ display: 'block', fontSize: '1rem' }}>{t.author}</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>{t.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '60px 0', borderTop: '1px solid #eee' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Stay Connected</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://www.instagram.com/uncleauthentic/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Follow us on Instagram</span>
          </a>
          <a href="https://www.facebook.com/unclechickenrice/?locale=zh_CN" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>See us on Facebook</span>
          </a>
        </div>
      </div>
      
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', opacity: 0.6 }}>Our Recent Highlights</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {['/assets/IMG_9429 3.jpeg', '/assets/IMG_9427.jpeg', '/assets/IMG_9426 2.jpeg', '/assets/IMG_1572.jpeg'].map((img, index) => (
            <div key={index} style={{
              position: 'relative',
              paddingBottom: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
