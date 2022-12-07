export default function FormInput({ className, placeholder}) {
    return (
      <>
        <input className={`outline-none formInputShadow border rounded-[10px] pl-8 placeholder:text-lg pr-4 ${className}`} type="text" placeholder={placeholder} />
      </>
    );
  }
  
