import MainLayout from '../layouts/MainLayout'
import Btn from '../components/UI/Btn'
import { Link } from '@remix-run/react'
const ErrorPage = () =>{
    return(
        <MainLayout>
            <div className='container flex items-center mx-auto py-16 lg:py-0 text-black px-4'>
                <div className="flex flex-col">
                <h3 className='font-days text-3xl lg:text-5xl mb-1 lg:mb-2 uppercase whitespace-nowrap'>Страница не найдена</h3>
                <p className='text-lg lg:text-2xl mb-5 lg:mb-10'>Запрашиваемая страница устарела, была удалена или не существовала вовсе</p>
               <Link to='/'><Btn className="btn-primary w-[280px] lg:w-[380px] h-[75px] text-2xl">Перейти на главную</Btn></Link>
                </div>
                <img src='/assets/error.png' className='hidden lg:block'/>
            </div>
        </MainLayout>
    )
}
export default ErrorPage;