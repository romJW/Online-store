import { useContext, useState, useEffect } from 'react';
import { ModalBasketContext, BasketArrContext } from '../../contexts/context';

import Btn from '../UI/Btn';
const Modal = () => {
  const { isBasketOpen, setBasketOpen } = useContext(ModalBasketContext);
  const { BasketArr, SetBasketArr } = useContext(BasketArrContext);
  const [total, setTotal] = useState(0);

  //   useEffect(() => {
  //     let parsedBasketArr = JSON.parse(localStorage.getItem('basketArr'));
  //     console.log(parsedBasketArr);
  //     SetBasketArr(parsedBasketArr);
  //   }, []);

  const removeFromBasket = (itemId) => {
    let items = BasketArr.filter((item) => item.id !== itemId);
    SetBasketArr([...items]);
    // localStorage.setItem('basketArr', JSON.stringify(BasketArr));
  };

  const plusEvent = (itemId) => {
    SetBasketArr((BasketArr) =>
      BasketArr.map((item) =>
        item.id === itemId
          ? {
              ...item,
              amount: item.amount + 1,
            }
          : item,
      ),
    );
    // localStorage.setItem('basketArr', JSON.stringify(BasketArr));
  };

  const minusEvent = (itemId) => {
    SetBasketArr((BasketArr) =>
      BasketArr.map((item) =>
        item.id === itemId && item.amount > 0
          ? {
              ...item,
              amount: item.amount - 1,
            }
          : item,
      ),
    );
    // localStorage.setItem('basketArr', JSON.stringify(BasketArr));
  };

  const CategoryItem = ({ text, className }) => {
    return (
      <div
        className={`bg-[#FDF7F2] rounded-[10px] py-4 text-sm text-center whitespace-nowrap ${className}`}>
        <p>{text}</p>
      </div>
    );
  };

  const BasketCounter = ({ amount, minusEvent, plusEvent, className }) => {
    return (
      <div className={`relative text-[#000000] ${className}`}>
        <div className="w-[130px] h-[45px] font-[Montserrat] rounded-[40px] bg-white flex justify-center items-center text-center calcBtnShadow text-[#00000099]">
          {amount} м
        </div>
        <span
          className="text-lg absolute top-[7px] left-[5px] font-bold cursor-pointer"
          onClick={minusEvent}>
          -
        </span>
        <span
          className="text-lg absolute  top-[7px] left-[110px] font-bold cursor-pointer"
          onClick={plusEvent}>
          +
        </span>
      </div>
    );
  };

  const BasketItem = ({
    image,
    title,
    price,
    cost,
    removeFromBasket,
    minusEvent,
    plusEvent,
    amount,
  }) => {
    return (
      <div className="">
        <div className="flex gap-1 items-center">
        <div className="flex items-center justify-center w-[250px] lg:w-[500px] gap-2">
          <img src={`/assets/${image}`} className="w-16 lg:w-[150px] h-16 lg:h-[100px]" />
          <div className="font-mont">
            <p className="font-bold text-base lg:text-xl">{title}</p>
            <p className="font-medium text-sm lg:text-base">{price} ₸</p>
          </div>
        </div>
        <div className="w-[170px] justify-center hidden lg:flex">
          <BasketCounter
            className=" mx-auto"
            amount={amount}
            minusEvent={minusEvent}
            plusEvent={plusEvent}
          />
        </div>
        <div className="justify-center w-[200px] hidden lg:flex">
          <p className="font-bold text-xl lg:text-3xl mx-auto">{cost * amount} ₸</p>
        </div>
        <div className="flex justify-center w-[90px]">
          <i class="fa-regular fa-trash-can" onClick={removeFromBasket}></i>
        </div>
        </div>
        <div className='flex lg:hidden justify-between items-center'>
        <BasketCounter
            className=" mx-auto"
            amount={amount}
            minusEvent={minusEvent}
            plusEvent={plusEvent}
          />
          <p className="font-bold text-xl lg:text-3xl mx-auto">{cost * amount} ₸</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setTotal(BasketArr.reduce((total, item) => total + item.amount * item.fullPrice, 0));
  }, [BasketArr]);

  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className="w-[320px] lg:w-[1040px] max-h-[750px] text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] pt-12 pb-4 overflow-auto">
          <div className="py-8 lg:py-12 px-8 lg:px-12">
            <h3 className="font-days text-3xl mb-8 text-center">Корзина</h3>
            <div className="justify-center gap-1 mb-4 hidden lg:flex">
              <CategoryItem text="Товар" className="w-[500px] " />
              <CategoryItem text="Количество" className="w-[170px]" />
              <CategoryItem text="Сумма (руб.)" className="w-[200px]" />
              <CategoryItem text="Удалить" className="w-[90px]" />
            </div>
            <div className="flex flex-col gap-8 mb-14 max-h-[300px] overflow-auto">
              {BasketArr.map((item) => (
                <BasketItem
                  key={item.id}
                  image={item.image}
                  title={
                    <>
                      {item.title} {item.size}
                    </>
                  }
                  price={+item.price}
                  cost={+item.fullPrice}
                  removeFromBasket={() => removeFromBasket(item.id)}
                  plusEvent={() => plusEvent(item.id)}
                  minusEvent={() => minusEvent(item.id)}
                  amount={item.amount}
                />
              ))}
            </div>
            <div className="text-[#6F6F6F] text-sm lg:text-base text-center mb-10">
              {BasketArr.length == 0 ? <p>Пусто</p> : <p>Итого:</p>}
              <p className="text-black font-bold text-3xl lg:text-5xl">{total.toFixed(2)} ₸</p>
            </div>
            <div className="flex justify-center items-center gap-5 flex-col-reverse lg:flex-row">
              <Btn className={`btn-secondary w-[260px] lg:w-[400px] h-16 lg:h-20 text-base lg:text-xl ${BasketArr.length !== 0 ? 'mb-0': 'mb-[150px]' } ` }>
                Продолжить покупки
              </Btn>
              {BasketArr.length !== 0 && (
                <Btn className="btn-primary w-[260px] lg:w-[350px] h-16 lg:h-20 text-base lg:text-xl">
                  Оформить заказ
                </Btn>
              )}
            </div>
          </div>
        </div>
        <i
          onClick={() => setBasketOpen(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-0 lg:right-[-40px] top-[-50px]"></i>
      </div>
    </>
  );
};
export default function ModalBasket() {
  const { isBasketOpen, setBasketOpen } = useContext(ModalBasketContext);
  return (
    <>
      {isBasketOpen && (
        <>
          <div
            onClick={() => setBasketOpen(false)}
            className="blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
