import {useState} from 'react';


export default function PlayBtn({ kind, className, children, path }) {
  const [isHover, setHover] = useState(false);
  return (
    <a href={path}>
    <div className={`rounded-full w-[150px] h-[150px] border border-[#E41D24]/[.30] flex justify-center items-center relative duration-200 ${className} z-20
    ${
      isHover ? 'hover:scale-110' : ''
    }
    `}>
      <div className={`rounded-full w-[110px] h-[110px] border border-[#E41D24]/[.30] flex justify-center items-center duration-200
       ${
        isHover ? 'hover:scale-110' : ''
      }
      `}>
        <div
          className={`
        rounded-full w-[85px] h-[85px] bg-[#E41D24] border border-[#E41D24] flex justify-center items-center hover:bg-[#B81C21] playBtnShadow duration-200	
          `}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <i className="fa-solid fa-play text-white fa-2xl"></i>
        </div>
      </div>
    </div>
    </a>
  );
}
