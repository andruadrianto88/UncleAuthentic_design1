import React from 'react';

const OrderGateway = () => {
  const providers = [
    {
      name: 'Pickup / Takeaway',
      desc: 'Order direct and skip the queue. Available for pickup at our Waymouth St location.',
      btnText: 'Order via Square',
      link: 'https://uncleauthentichainanesechickenrice.square.site',
      bgColor: 'var(--color-charcoal)',
      color: 'var(--color-white)',
      hoverBg: '#333'
    },
    {
      name: 'UberEats Delivery',
      desc: 'Get your favorite chicken rice delivered straight to your door or office.',
      btnText: 'Order on UberEats',
      link: 'https://www.ubereats.com/au/store/uncle-authentic-hainanese-chicken-rice/ZT_9ZY0VV6msQgmG6XhEow',
      bgColor: '#00cc99',
      color: 'var(--color-charcoal)',
      hoverBg: '#00b386'
    },
    {
      name: 'DoorDash Delivery',
      desc: 'Available for fast delivery through the DoorDash app network.',
      btnText: 'Order on DoorDash',
      link: 'https://www.doordash.com/store/uncle-authentic-chicken-rice',
      bgColor: '#FF5A00',
      color: 'var(--color-white)',
      hoverBg: '#e65100'
    }
  ];

  return (
    <section id="order" style={{ backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Ready to Order?</h2>
      <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-chili-red)', margin: '0 auto 50px' }}></div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {providers.map((p, idx) => (
          <div key={idx} style={{
            padding: '40px 30px',
            borderRadius: '12px',
            backgroundColor: 'var(--color-light-gray)',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-charcoal)' }}>{p.name}</h3>
              <p style={{ color: 'var(--color-gray)', marginBottom: '30px', lineHeight: '1.6' }}>
                {p.desc}
              </p>
            </div>
            
            <a 
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '16px 24px',
                borderRadius: '6px',
                backgroundColor: p.bgColor,
                color: p.color,
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-sans)',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = p.hoverBg;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = p.bgColor;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {p.btnText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderGateway;
