export default function mainSectionPicCard({image, title}){
    return(
       <>
       <div className="w-[270px] h-[222px] bg-[#FFFFFF]  rounded-[10px] flex flex-col text-center items-center gap-4">
            <img src={image} alt=''/>
            <p className="text-xl text-center mx-auto font-bold	">{title}</p>
       </div>
       </> 
    )
    }