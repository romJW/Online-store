export default function AboutCard({icon, text, className}) {
  return (
    <>
      <div className={`flex text-black items-center bg-[#F3ECEC] shadow-2xl gap-8 px-6 h-24 rounded-[10px] relative z-10 ${className}`}>
        <img src={icon} alt='' style={{width:'80px',height:'60px'}}/>
        <p className="font-medium text-base lg:text-xl">{text}</p>
      </div>
    </>
  );
}
