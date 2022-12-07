import SliderBtnLeft from './UI/SliderBtnLeft';
import SliderBtnRight from './UI/SliderBtnRight';
import SliderPagination from './UI/SliderPagination';

export default function Swipe() {
  const slides = [
    { image: 'assets/sliderPhoto1.png' },
    { image: 'assets/SliderPhoto2.png' },
    { image: 'assets/SliderPhoto3.png' },
    { image: 'assets/sliderPhoto1.png' },
    { image: 'assets/SliderPhoto2.png' },
  ];
  return (
    <>
      <div className="mx-auto mt-24">
        <h2 className="text-center uppercase font-[Days] text-3xl lg:text-5xl mb-8 lg:mb-10">ФОТОГРАФИИ С МЕСТ УСТАНОВКИ</h2>
        <div className="swiper mx-auto mb-10 relative">
          <div className="swiper-wrapper mx-auto">
            {slides.map((slide) => {
              return (
                <div className="swiper-slide flex gap-12 items-center justify-center overflow-hidden">
                  <img src={slide.image} className="" />
                </div>
              )
            }
            )}
            </div>
          </div>
        </div>
        <SliderPagination />
        <div className="flex justify-center gap-6 mt-5">
          <SliderBtnLeft />
          <SliderBtnRight />
        </div>
    </>
  );
}
