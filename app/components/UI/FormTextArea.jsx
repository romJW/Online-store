export default function FormInput({ className, placeholder}) {
    return (
      <>
        <textarea  className={`outline-none border formInputShadow resize-none pt-7 pl-8 rounded-[10px] shadow-xl pl-8 placeholder:text-lg pr-4 ${className}`} type="text" placeholder={placeholder} />
      </>
    );
  }
  
