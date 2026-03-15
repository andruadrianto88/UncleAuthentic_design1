import React from 'react';

const Navbar = ({ scrolled }) => {
  const handleOrderClick = () => {
    // Scroll to order section or open modal
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      backgroundColor: scrolled ? 'var(--color-white)' : 'transparent',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%',
      justifyContent: 'space-between'
    }}>
      <div className="logo" style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '24px',
        fontWeight: '700',
        color: scrolled ? 'var(--color-charcoal)' : 'var(--color-white)',
        letterSpacing: '1px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <img 
          src="/assets/46488484_1056019454568209_8562300634978582528_n.png" 
          alt="Uncle Authentic Logo" 
          style={{ 
            height: '40px', 
            width: 'auto',
            borderRadius: '50%',
            backgroundColor: 'white' // Adding white bg in case logo is dark/transparent
          }} 
        />
        <span>UNCLE AUTHENTIC</span>
      </div>
      
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <ul className="desktop-nav" style={{ display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          {['Menu', 'Story', 'Location'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{
                color: scrolled ? 'var(--color-charcoal)' : 'var(--color-white)',
                fontWeight: '500',
                fontSize: '15px'
              }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button 
          className="btn btn-primary"
          onClick={handleOrderClick}
        >
          Order Now
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
