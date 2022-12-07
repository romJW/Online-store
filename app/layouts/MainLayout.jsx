import Header from '../components/Header';
import Footer from '../components/Footer';
import {useState} from 'react';
import { MobileMenuContext, ModalCityContext } from '../contexts/context';
export default function MainLayout({children}) {
    const [isCityModalOpen, setCityModalOpen] = useState(false);
    const [isMobileMenuOpen, SetMobileMenuOpen] = useState(false);
  return (
    <div
    style={{
      lineHeight: '1.4',
      fontSize: '18px',
    }}
    className=''>
        <ModalCityContext.Provider value={{ isCityModalOpen, setCityModalOpen }}>
        <MobileMenuContext.Provider value={{ isMobileMenuOpen, SetMobileMenuOpen }}>
          <Header />
          {children}
            <Footer />
            </MobileMenuContext.Provider>
      </ModalCityContext.Provider>
      </div>
  );
}
