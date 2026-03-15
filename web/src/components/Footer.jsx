import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-charcoal)',
      color: 'var(--color-white)',
      padding: '60px 5% 30px',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '40px',
        marginBottom: '60px',
        maxWidth: '1200px',
        margin: '0 auto 60px'
      }}>
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '20px' }}>
            UNCLE AUTHENTIC
          </h3>
          <p style={{ opacity: 0.7, lineHeight: 1.8, marginBottom: '20px' }}>
            Bringing the authentic taste of Hainanese Chicken Rice to Adelaide CBD. Our commitment is to quality, tradition, and flavor.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://www.instagram.com/uncleauthentic/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7 }}>Instagram</a>
            <a href="https://www.facebook.com/unclechickenrice/?locale=zh_CN" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7 }}>Facebook</a>
          </div>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--color-chili-red)' }}>Quick Links</h4>
          <ul style={{ padding: 0, margin: 0, opacity: 0.7, lineHeight: 2 }}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#order">Order Online</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--color-chili-red)' }}>Contact</h4>
          <p style={{ opacity: 0.7, lineHeight: 1.8 }}>
            4A/8 Waymouth Street<br/>
            Adelaide SA 5000<br/>
            <br/>
            Email: <a href="mailto:hello@uncleauthentic.com.au">hello@uncleauthentic.com.au</a> (fictional)
          </p>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '30px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.5,
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Uncle Authentic Hainanese Chicken Rice. All rights reserved.</p>
        <p style={{ marginTop: '10px' }}>Site designed & developed by Nicholas</p>
      </div>
    </footer>
  );
};

export default Footer;
