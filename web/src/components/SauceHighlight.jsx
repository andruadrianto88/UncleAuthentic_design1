import React from 'react';

const SauceHighlight = () => {
  return (
    <section id="story" style={{ 
      backgroundColor: 'var(--color-charcoal)', 
      color: 'var(--color-white)',
      display: 'flex',
      alignItems: 'center',
      gap: '50px',
      flexWrap: 'wrap-reverse'
    }}>
      <div style={{ flex: '1 1 400px', padding: '20px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-chili-red)' }}>
          The Secret is in the Sauce
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px', opacity: 0.9 }}>
          At Uncle Authentic, we believe the soul of Hainanese Chicken Rice lies in its condiments. 
          Our signature chili sauce is made fresh daily from a secret blend of fiery chilies, garlic, 
          and tangy calamansi. 
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
          Paired with our aromatic hand-pounded ginger paste and premium thick dark soy sauce, 
          every bite is a perfect harmony of savory, sweet, and spicy flavors that keep our 
          customers coming back for more.
        </p>
      </div>
      <div style={{ 
        flex: '1 1 400px', 
        height: '400px',
        backgroundColor: '#333',
        borderRadius: '12px',
        backgroundImage: 'url("/assets/story-section.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
      </div>
    </section>
  );
};

export default SauceHighlight;
