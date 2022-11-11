export default function mainSectionCard({icon, title}){
return(
   <>
   <div className="w-[320px] h-[163px] md:w-[370px] md:h-[220px] bg-[#FDF7F2] border rounded-[50px] flex flex-col gap-5 justify-center text-center items-center">
        <img src={icon} alt=''/>
        <p className="text-xl text-center mx-auto">{title}</p>
   </div>
   </> 
)
}