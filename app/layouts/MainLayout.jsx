import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import {
  MobileMenuContext,
  ModalCityContext,
  ModalBasketContext,
  BasketArrContext,
  ModalInstructionContext,
  ModalInstructionVidContext,
  ModalDataSentContext,
  ModalFormContext,
  ModalPartnershipContext
} from '../contexts/context';
export default function MainLayout({ children }) {
  const [isCityModalOpen, setCityModalOpen] = useState(false);
  const [isMobileMenuOpen, SetMobileMenuOpen] = useState(false);
  const [isBasketOpen, setBasketOpen] = useState(false);
  const [BasketArr, SetBasketArr] = useState([]);
  const [isInstructionModalOpen, setInstructionModalOpen] = useState(false);
  const [isInstructionVidModalOpen, setInstructionVidModalOpen] = useState(false);
  const [isDataSent, setDataSent] = useState(false);
  const [isForm, setForm] = useState(false);
  const [isPartnership, setPartnership] = useState(false);
  return (
    <div
      style={{
        lineHeight: '1.4',
        fontSize: '18px',
      }}
      className="">
      <ModalCityContext.Provider value={{ isCityModalOpen, setCityModalOpen }}>
        <MobileMenuContext.Provider value={{ isMobileMenuOpen, SetMobileMenuOpen }}>
          <ModalBasketContext.Provider value={{ isBasketOpen, setBasketOpen }}>
            <BasketArrContext.Provider value={{ BasketArr, SetBasketArr }}>
              <ModalInstructionContext.Provider
                value={{ isInstructionModalOpen, setInstructionModalOpen }}>
                <ModalInstructionVidContext.Provider
                  value={{ isInstructionVidModalOpen, setInstructionVidModalOpen }}>
                    <ModalDataSentContext.Provider value={{ isDataSent, setDataSent }}>
                      <ModalFormContext.Provider value={{ isForm, setForm }}>
                        <ModalPartnershipContext.Provider value={{isPartnership, setPartnership}}>
                  <Header />
                  {children}
                  <Footer />
                  </ModalPartnershipContext.Provider>
                  </ModalFormContext.Provider>
                  </ModalDataSentContext.Provider>
                </ModalInstructionVidContext.Provider>
              </ModalInstructionContext.Provider>
            </BasketArrContext.Provider>
          </ModalBasketContext.Provider>
        </MobileMenuContext.Provider>
      </ModalCityContext.Provider>
    </div>
  );
}
