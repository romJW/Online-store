import InputMask from 'react-input-mask';
export default function PhoneInput({ className, placeholder}) {
    return (
      <>
        <InputMask  mask='+7 (999) 999 9999'  className={`rounded-[10px] outline-none border formInputShadow pl-8 placeholder:text-[#2F222299] placeholder:text-lg ${className}`} type="text" placeholder={placeholder} />
      </>
    );
  }
  
