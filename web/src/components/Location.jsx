import React from 'react';

const Location = () => {
  return (
    <section id="location" style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-white)' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '50px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Visit Us</h2>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: 'var(--color-chili-red)', fontSize: '1.2rem', marginBottom: '10px' }}>Address</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              4A/8 Waymouth Street<br/>
              Adelaide SA 5000<br/>
              Australia
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: 'var(--color-chili-red)', fontSize: '1.2rem', marginBottom: '10px' }}>Opening Hours</h3>
            <ul style={{ padding: 0, margin: 0, opacity: 0.9, lineHeight: '2' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '5px' }}>
                <span>Monday - Friday</span>
                <span>10:30 AM - 3:00 PM</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '5px', paddingTop: '5px' }}>
                <span>Saturday - Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
          <div>
            <span style={{ 
              display: 'inline-block',
              padding: '6px 12px',
              backgroundColor: 'rgba(0, 204, 153, 0.15)',
              color: '#00cc99',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              border: '1px solid rgba(0, 204, 153, 0.3)'
            }}>
              <span style={{ marginRight: '6px' }}>●</span> OPEN NOW
            </span>
          </div>
        </div>

        <div style={{ flex: '2 1 500px', minHeight: '400px', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3965614902324!2d138.59762957640428!3d-34.92159517316712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced3d8e0e7a5%3A0xe54e60e86b0dae95!2s8%20Waymouth%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e0!3m2!1sen!2sus!4v1709230531235!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Uncle Authentic Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
