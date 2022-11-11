import Hero from '../components/Hero';
import Header from '../components/Header';
import Map from '../components/Map';
import { MobileMenuContext } from '../contexts/MobileMenu.js';
import Consult from '../components/Consult';
import NewsBlock from '../components/NewsBlock';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'inter-regular, sans-serif',
        lineHeight: '1.4',
        fontSize: '18px',
      }}>
      <Header />
      <MobileMenuContext.Consumer>{({ isOpen }) => !isOpen && <Hero />}</MobileMenuContext.Consumer>
      <Consult/>
      <NewsBlock/>
      <Subscribe/>
      <Map/>  
      <Footer/>
    </div>
  );
}
