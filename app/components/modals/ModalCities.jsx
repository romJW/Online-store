import { useContext } from 'react';
import {ModalCityContext} from '../../contexts/context'

const CityItem = function({children, onClick}){
    
    return(
        <>
        <p  className='text-xs cursor-pointer' onClick={onClick}>{children}</p>
        </>
    )
}
const Modal = function(){
    const {isCityModalOpen, setCityModalOpen, currentCity, setCurrentCity } = useContext(ModalCityContext)
    const cities ={
        letterA:['Актобе', 'Акколь', 'Актобе', 'Аксай', 'Аксу', 'Актау', 'Актобе', 'Алга', 'Алматы,', 'Арал', 'Аркалык', 'Арыс', 'Астана', 'Атбасар', 'Атырау', 'Аягоз', 'Астана'],
        letterB:['Байконур', 'Балхаш', 'Булаево'],
        letterD:['Державинск'],
        letterE:['Ерейментау', 'Есик', 'Есиль'],
        letterJ:['Жанаозен', 'Жанатас', 'Жаркент','Жезкаган', 'Жем', 'Жетысай','Житикара'],
        letterZ:['Зайсан', 'Зыряновск'],
        letterK:['Казалинск', 'Кандыагаш', 'Капшагай', 'Караганда', 'Каражал', 'Каратуау', 'Каркаралинск', 'Каскелен', 'Кентау,', 'Кокшетау', 'Костанай', 'Кулсары', 'Курчатов', 'Кызылорда'],
        letterL:['Ленгер', 'Лисаковск'],
        letterM:['Макинск', 'Мамлютка'],
        letterP:['Павлодар', 'Петропавловск', 'Приозёрск'],
        letterR:['Риддер', 'Рудный'],
        letterS:['Сарань', 'Сарканд', 'Сарыагаш', 'Сатпаев', 'Семей', 'Сергеевка', 'Серебрянск', 'Степногорск', 'Степняк'],
        letterT:['Тайынша', 'Талгар', 'Талдыкорган', 'Тараз', 'Текели', 'Темир', 'Темиртау', 'Туркестан'],
        letterU:['Уральск', 'Усть-Каменогорск','Учарал', 'Уштобе'],
        letterF:['Форт-Шувченко'],
        letterH:['Хромтау'],
        letterSH:['Шалкар', 'Шар', 'Шардара ', 'Шахтинск', 'Шемонаиха', 'Шу', 'Шымкент'],
        letterSHI:['Щучинск'],
        letterEA:['Экибастуз', 'Эмба'],
        
    } 
    return(
        <>
        <div className="modalCities fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
            <div className='w-[300px] lg:w-[810px] h-[700px] text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] pt-12 pb-4 overflow-auto'>
            <div className="container px-12">
                <h3 className='text-xl tracking-wider mb-8'>Выберите город</h3>
                <div className="cities grid grid-cols-2 lg:grid-cols-3  gap-2 lg:gap-32">
                    <div className="first flex flex-col gap-6">
                        <div>
                            <h3 className='font-bold text-base mb-2'>А</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterA.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Б</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterB.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Д</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterD.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Е</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterE.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Ж</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterJ.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>З</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterZ.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                    </div>
                    <div className="second flex flex-col gap-6">
                        <div>
                            <h3 className='font-bold text-base mb-2'>К</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterK.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Л</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterL.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>М</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterM.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>П</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterP.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Р</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterR.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>С</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterS.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                    </div>
                    <div className="third flex flex-col gap-6">
                        <div>
                            <h3 className='font-bold text-base mb-2'>Т</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterT.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>У</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterU.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Ф</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterF.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Х</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterH.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Ш</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterSH.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Щ</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterSHI.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-base mb-2'>Э</h3>
                            <div className="flex flex-col gap-2">
                                {cities.letterEA.map((city)=><CityItem children={city} onClick={()=>{
                                    setCurrentCity(city)
                                    setCityModalOpen(false)
                                }
                                    
                                    }/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <i onClick={()=>setCityModalOpen(false)} className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-[-40px] top-[-50px]"></i>
        </div>
        </>
    )
}
export default function ModalCities(){
   
    const {isCityModalOpen, setCityModalOpen } = useContext(ModalCityContext)
    return(
        <>
        
        {isCityModalOpen &&
        (
        <>
            <div onClick={()=>setCityModalOpen(false)} className='blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]'>   
            </div>
            <Modal/>
        </>
        )
        }
        </>
    )
}
