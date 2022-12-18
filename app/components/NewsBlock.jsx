import NewsCard from './NewsCard'
import Btn from './UI/Btn'
import Section from '../components/UI/Section.jsx';
export default function NewsBlock(){
    const NewsCards = [
        {image:'/assets/News1.png',title:'Новость 1', date:'06.09.2022'},
        {image:'/assets/News2.png',title:'Здесь будет новость с названием в 2 строки', date:'06.09.2022'},
        {image:'/assets/News3.png',title:'А теперь нужна новость с очень длинным названием, ...', date:'06.09.2022'},
    ]
    return(
        <>
        <Section>
        <div className="newsBlock mx-auto">
            <div className="newsBlock text-black mx-auto container flex flex-col justify-center items-center">
                <h3 className="font-[Days] text-center text-3xl lg:text-5xl mb-4 lg:mb-10">НОВОСТИ И ПОЛЕЗНЫЕ СТАТЬИ</h3>
                <div className='flex  gap-8 justify-between flex-col xl:flex-row mb-8 lg:mb-10'>
                    {NewsCards.map((card)=><NewsCard className="w-[280px] lg:w-[370px]" image={card.image} title={card.title} date={card.date} key={card.image}/>)}
                </div>
                <Btn kind="btn-secondary" className="font-semibold tracking-wider text-base lg:text-2xl w-[300px]  lg:w-[380px] h-[90px]">Больше новостей</Btn>
            </div>
        </div>
        </Section>
        </>
    )
}