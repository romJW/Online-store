import { useState, useContext } from 'react';
import { ModalPartnershipContext, ModalDataSentContext } from '../../contexts/context';
import ImageUploading from 'react-images-uploading';

import PhoneInput from '../UI/PhoneInput';
import FormInput from '../UI/FormInput';
import Btn from '../UI/Btn';
import CheckBox from '../UI/CheckBox';
import ImageUploader from '../UI/ImageUploader';

const Modal = () => {
  const { isPartnership, setPartnership } = useContext(ModalPartnershipContext);
  const { isDataSent, setDataSent } = useContext(ModalDataSentContext);
  const [images, setImages] = useState([]);
  const maxNumber = 68;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className="flex w-[320px] lg:w-[1100px] max-h-[840px] mx-auto py-10 lg:py-20  text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] ">
          <img src="/assets/ModalPartner.png" className="hidden lg:block" />
          <div className="flex flex-col justify-center px-2">
            <h3 className="text-lg lg:text-2xl text-center lg:text-start font-bold mb-2">
              Прикрепите ваш проект <br /> и получите рассчет стоимости
            </h3>
            <p className="text-sm lg:text-lg text-center lg:text-start mb-8">
              материалов и рекомендации по монтажу
            </p>
            <ImageUploader className="w-[420px] h-[150px] mb-3 hidden lg:block" />
            <FormInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3"
              placeholder="Введите ваше имя"
            />
            <PhoneInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-8 placeholder:text-start"
              placeholder="Номер телефона"
            />
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url">
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div>
                  {imageList.length == 0 && (
                    <Btn
                      className="btn-secondary rounded-md text-base w-[300px] mb-5 h-16 block lg:hidden"
                      onClick={onImageUpload}>
                      Прикрепить файл
                    </Btn>
                  )}
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image['data_url']} className="h-16 w-16" />
                      <div className="flex gap-2 items-center">
                        <button onClick={() => onImageUpdate(index)}>Обновить</button>
                        <i
                          className="fa-sharp cursor-pointer fa-solid fa-xmark"
                          onClick={() => onImageRemove(index)}></i>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            <div className="flex flex-col-reverse lg:flex-col items-center gap-5 lg:pb-12">
              <Btn
                kind="btn-primary w-[300px] lg:w-[420px] h-[65px] lg:h-[85px] text-base lg:text-xl mb-4"
                onClick={() => {
                  setPartnership(false);
                  setDataSent(true);
                }}>
                Получить рассчет
              </Btn>
              <div className="flex items-start justify-center gap-3">
                <CheckBox className="w-5 h-5" />
                <p className="text-sm  text-[#4E5CD1] font-mont">
                  <span className="text-[#2F222266]">Согласен с</span> политикой конфиденциальности
                  <br />и обработкой моих персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
        <i
          onClick={() => setPartnership(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-0 lg:right-[-40px] top-[-50px]"></i>
      </div>
    </>
  );
};
export default function ModalPartnership() {
  const { isPartnership, setPartnership } = useContext(ModalPartnershipContext);
  return (
    <>
      {isPartnership && (
        <>
          <div
            onClick={() => setPartnership(false)}
            className="blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
