export default function SliderBtnRight({ className, onClick }) {
  return (
    <>
      <div
        className={`swiper-button-right sliderBtnShadow w-20 h-20 scale-75 lg:scale-100 bg-[#AC9B9C] rounded-[20px] flex justify-center items-center transition duration-150 hover:bg-[#987F81] ${className}`}
        onClick={onClick}>
        <i class="fa-solid fa-chevron-right text-white fa-2x  "/>
      </div>
    </>
  );
}
