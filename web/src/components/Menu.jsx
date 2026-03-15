import React from 'react';

const Menu = () => {
  return (
    <section id="menu" style={{ backgroundColor: 'var(--color-white)', textAlign: 'center', padding: '100px 5%' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Our Menu</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-chili-red)', margin: '0 auto' }}></div>
      </div>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', maxWidth: '600px', margin: '0 auto 40px' }}>
        Explore our full selection of authentic Hainanese dishes, from our signature poached and crispy chicken to our comforting laksa noodles.
      </p>

      <a 
        href="/assets/Uncle -Menu_2024_July.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ fontSize: '1.2rem', padding: '16px 40px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
      >
        View Full Menu 
        <span style={{ fontSize: '1.4rem' }}>&rarr;</span>
      </a>
    </section>
  );
};

export default Menu;
