export default function NewsBlock({image,title,date,className}){
    return(
        <>
        <div className={`flex flex-col justify-between self-stretch ${className}`}>
            <img src={image} alt="" className='rounded-[10px] mb-4'/>
            <p className='text-lg lg:text-2xl mb-4'>{title}</p>
            <div className="flex justify-between">
            <p className='text-sm lg:text-lg text-[#B6B6B6]'>{date}</p>
            <p className='text-base lg:text-lg'>Подробнее <i class="fa-solid fa-arrow-right text-[#286F2B]"></i></p>
            </div>
        </div>
        </>
    )
}