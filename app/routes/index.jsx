import Hero from '../components/Hero';
import Header from '../components/Header';
import MainSection from '../components/mainSection.jsx';
import Map from '../components/Map';
import BoardDescription from '../components/BoardDescription.jsx';
import { MobileMenuContext } from '../contexts/MobileMenu.js';
import Consult from '../components/Consult';
import NewsBlock from '../components/NewsBlock';
import Footer from '../components/Footer';
import SliderReview from '../components/SliderReview';
import SliderLicense from '../components/SliderLicense';
import Slider from '../components/Slider';
import MontageBlock from '../components/MontageBlock';
import DeliveryBlock from '../components/DeliveryBlock';
import About from '../components/About';
import FormBlock from '../components/FormBlock';
import Subscribe from '../components/Subscribe';
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
      <MainSection />
      <Slider />
      <Consult/>
      <BoardDescription />
      <MontageBlock />
      <About />
      <FormBlock />
      <SliderReview />
      <DeliveryBlock />
      <SliderLicense />  
      <Consult/>
      <NewsBlock/>
      <Map />
      <Subscribe/>
      <Footer />
    </div>
  );
}
