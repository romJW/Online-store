import ModalCities from './modals/ModalCities'
import { useContext } from 'react';
import {ModalCityContext} from '../contexts/context'

export default function MetaHeader({ className }) {
  const {isCityModalOpen, setCityModalOpen } = useContext(ModalCityContext)
  return (
    <>
    
    <div className={`${className} w-full bg-[#2E2E2E] py-2`}>
      <div className="hidden md:flex container justify-between mx-auto justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot fa-sm text-[#FFFFFF80]"></i>
            <p className="text-[#FFFFFF80] text-sm">Ваш регион:</p>
          </div>
          <p onClick={()=>setCityModalOpen(true)} className="outline-none cursor-pointer text-white bg-transparent border-none text-sm">
              Выберите Город <i class="fa-sharp fa-solid fa-chevron-down"></i>  
          </p>
        </div>
        <a rel="nofollow" className="text-white text-sm " href="mailto:info@abbex.kz">
          info@abbex.kz
        </a>
      </div>

    </div>
   
    </>

  );
}
