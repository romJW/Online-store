import CatalogLayout from '../../../layouts/CatalogLayout';
import SendProject from '../../../components/SendProject';
import MontageBlock from '../../../components/MontageBlock';
import Consult from '../../../components/Consult';
import Subscribe from '../../../components/Subscribe';
import BoardDescription from '../../../components/BoardDescription';
import CatalogProducts from '../../../components/CatalogProducts';
import CatalogStairs from '../../../components/CatalogStairs'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'
export default function Catalog() {
  return (
    <CatalogLayout>
      <BreadCrumbs className="text-black pt-6 lg:pt-10 pb-6 lg:pb-2" pages={[{name:'Главная', path:'/'}, {name:'каталог ДПК', path:'/catalog'},{name:'cтупени из ДПК', path:'/catalog/board'}]}/>
      <CatalogStairs/>
      <BoardDescription/>
      <MontageBlock/>
      <SendProject />
      <Consult title='Получите консультацию' text={<><span className='font-bold'>по вашему объекту уже сегодня. </span> Оставьте заявку и наш менеджер <br/> свяжется с вами чтобы проконсультировать и рассчитать стоимость </>} />
      <Subscribe/>
    </CatalogLayout>
  );
}
