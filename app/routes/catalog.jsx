import CatalogLayout from '../layouts/CatalogLayout';
import SendProject from '../components/SendProject';
import MontageBlock from '../components/MontageBlock';
import Consult from '../components/Consult';
import Subscribe from '../components/Subscribe';
import BoardDescription from '../components/BoardDescription';
import CatalogProducts from '../components/CatalogProducts';
export default function Catalog() {
  return (
    <CatalogLayout>
      <CatalogProducts/>
      <BoardDescription/>
      <MontageBlock/>
      <SendProject />
      <Consult title='Получите консультацию' text={<><span className='font-bold'>по вашему объекту уже сегодня. </span> Оставьте заявку и наш менеджер <br/> свяжется с вами чтобы проконсультировать и рассчитать стоимость </>} />
      <Subscribe/>
    </CatalogLayout>
  );
}
