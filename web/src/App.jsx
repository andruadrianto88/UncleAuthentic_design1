import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import SauceHighlight from './components/SauceHighlight'
import SocialProof from './components/SocialProof'
import OrderGateway from './components/OrderGateway'
import Location from './components/Location'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
      <main>
        <Menu />
        <SauceHighlight />
        <OrderGateway />
        <SocialProof />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
