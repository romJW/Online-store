import React from 'react'
import Btn from './UI/Btn'
const SendProject = () => {
  return (
    <div className="wood-bg pt-32 pb-10">
        <div className="container mx-auto flex justify-center ">
        <img src="/assets/IpadBig.png" className='hidden lg:block'/>

        <div className="flex flex-col justify-center text-white text-center lg:text-start px-2">
            <h3 className="font-[Days] uppercase text-3xl lg:text-5xl mb-2 whitespace-nowrap">Отправьте проект и <br/> мы его посчитаем</h3>
            <p className="text-lg lg:text-2xl mb-10">Вы получите стоимость материала с доставкой</p>
            <img src="/assets/IpadBig.png" className='block lg:hidden'/>
            <p className="text-[#FFFFFFB2] text-xs lg:text-xl xl:w-[600px] mb-12">А также вместе со сметным расчётом мы отправим вам <br/> сопроводительные документы и инструкции по <br/> использованию террасной доски взависимости от сферы <br/> пррмиенения</p>
            <Btn className="btn btn-primary text-base lg:text-xl w-full lg:w-[300px] xl:w-[390px] h-[80px] lg:h-[110px]">Получить рассчет</Btn>
        </div>
        </div>

    </div>
  )
}

export default SendProject
