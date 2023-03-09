export default function SliderBtn({className, onClick, children}){
    return (
        <>
        <div className={`sliderBtnShadow w-12 h-12 lg:w-20 lg:h-20 bg-[#AC9B9C] rounded-[10px] flex justify-center items-center hover:bg-[#987F81] ${className}`} onClick={onClick}>
         {children}
           </div>
        </>
    )
}