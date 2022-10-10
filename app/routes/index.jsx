import Hero from '../components/Hero';
import Header from '../components/Header';
import { MobileMenuContext } from '../contexts/MobileMenu.js';
export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'inter-regular, sans-serif',
        lineHeight: '1.4',
        fontSize: '18px',
        color: '#fff',
      }}>
        <Header/>
      {/* <MobileMenuContext.Consumer>
        {({ isOpen }) =>
          !isOpen && (  
              <Hero />  
          )
        }
      </MobileMenuContext.Consumer> */}
    </div>
    
  );
}
