import InputMask from 'react-input-mask';
export default function PhoneInput({ className, placeholder}) {
    return (
      <>
        <InputMask  mask='+7 (999) 999 9999'  className={`rounded-[10px]  outline-none border shadow-xl pl-8 placeholder:text-lg p ${className}`} type="text" placeholder={placeholder} />
      </>
    );
  }
  
