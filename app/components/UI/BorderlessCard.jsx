export default function BorderlessCard({ icon, text, className }) {
  return (
    <>
      <div className={`flex flex-col justify center items-center gap-5 text-center ${className}`}>
        <img src={icon} alt="" className="w-18 h-18"></img>
        <p>{text}</p>
      </div>
    </>
  );
}
