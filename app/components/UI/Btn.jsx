export default function Btn({ className,children  }) {
  return (
    <button
      className={`
      font-normal
        shadow-3xl  
        transition duration-150
        hover:bg-[#B81C21] ${className}`}>
      {children}
    </button>
  );
}
