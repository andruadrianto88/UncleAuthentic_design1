import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%',
      backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.7)), url("/assets/hero-interior.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // Parallax effect
      color: 'var(--color-white)'
    }}>
      <div style={{ maxWidth: '800px', zIndex: 2 }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 5vw, 5rem)',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Authentic Hainanese<br/>
          Chicken Rice
        </h1>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '600px',
          marginBottom: '40px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          opacity: 0.9
        }}>
          Experience the true taste of tradition right in Adelaide CBD. 
          Perfectly poached chicken, fragrant rice, and our secret house-made chili sauce.
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Order for Pickup
          </button>
          <button className="btn btn-outline" style={{ 
            padding: '16px 32px', 
            fontSize: '18px', 
            borderColor: 'var(--color-white)', 
            color: 'var(--color-white)' 
          }}>
            View Menu
          </button>
        </div>
      </div>
      
      {/* Decorative overlay for premium feel */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(to top, var(--color-light-gray), transparent)',
        zIndex: 1
      }}></div>
    </section>
  );
};

export default Hero;
