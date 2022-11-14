export default function FormInput({ className, placeholder}) {
    return (
      <>
        <input className={`outline-none border rounded-[10px] shadow-xl pl-8 placeholder:text-lg ${className}`} type="text" placeholder={placeholder} />
      </>
    );
  }
  
