import Hero from '../components/Hero';
import Header from '../components/Header';
import MainSection from '../components/mainSection.jsx';
import Map from '../components/Map';
import BoardDescription from '../components/BoardDescription.jsx';
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
import MainLayout from '../layouts/MainLayout';
export default function Index() {
  return (
    <>
      <MainLayout>
        <Hero />
        <MainSection />
        <Slider />
        <div className="relative">
          <Consult
            text={
              <>
                <p className="font-bold">Получите консультацию по вашему объекту уже сегодня.</p>
                <p>
                  Оставьте заявку и наш менеджер свяжется с вами чтобы <br /> проконсультировать и
                  рассчитать стоимость
                </p>
              </>
            }
          />
          <div className="absolute right-[1px] top-[-50px]">
            <img src="/assets/circles.svg" alt="" className="" />
          </div>
        </div>
        <BoardDescription />
        <MontageBlock />
        <About />
        <FormBlock />
        <SliderReview />
        <DeliveryBlock />
        <SliderLicense className="wood-bg text-white pt-24 lg:pt-[170px]" />
        <Consult
          title="Получите консультацию"
          text={
            <>
              <p>
                <span className="font-bold">по вашему объекту уже сегодня.</span> Оставьте заявку и
                наш менеджер <br /> свяжется с вами чтобы проконсультировать и рассчитать стоимость
              </p>
            </>
          }
        />
        <NewsBlock />
        <Map />
        <Subscribe />
      </MainLayout>
    </>
  );
}
