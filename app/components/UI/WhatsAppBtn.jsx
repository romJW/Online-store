import { useState } from 'react';
export default function WhatsAppBtn(props){
    const [isHover, setIsHover] = useState(false);
    return (
    <div
        className={`z-4 hidden lg:flex border border-[#25d366] rounded-3xl w-28 h-28 items-center justify-center absolute left-3/4 top-[550px] ${
          isHover ? 'hover:w-32 hover:h-32' : ''
        } `}>
        <div
          className={`z-4 border border-[#25d366] rounded-3xl w-20 h-20 flex items-center justify-center  ${
            isHover ? 'hover:w-24 hover:h-24' : ''
          }`}>
          <div className="bg-white w-10 h-10">
            <i
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="z-4 fa-brands fa-square-whatsapp fa-3x relative bottom-2 right-1"
              style={{
                color: '#25d366',
                display: 'block',
                justifySelf: 'center',
                alignSelf: 'center',
              }}></i>
          </div>
        </div>
      </div>
    )
}