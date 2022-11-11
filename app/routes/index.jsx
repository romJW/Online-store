import Hero from '../components/Hero';
import Header from '../components/Header';
import { MobileMenuContext } from '../contexts/MobileMenu.js';
import NewsBlock from '../components/NewsBlock';
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
      <NewsBlock/>
    </div>
  );
}
