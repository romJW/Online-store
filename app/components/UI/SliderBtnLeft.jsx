export default function SliderBtnLeft({className, onClick}){
    return (
        <>
        <div className={`swiper-button-left w-12 h-12 lg:w-20 lg:h-20 bg-[#AC9B9C] shadow-xl rounded-[20px] flex justify-center items-center transition duration-150 hover:bg-[#987F81] ${className}`} onClick={onClick}>
         <i class="fa-solid fa-chevron-left text-white fa-2x"/>
           </div>
        </>
    )
}
