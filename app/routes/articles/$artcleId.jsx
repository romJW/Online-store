import Subscribe from '../../components/Subscribe';
import Consult from '../../components/Consult';
import MainLayout from '../../layouts/MainLayout';
import Section from '../../components/UI/Section';
import BreadCrumbs from '../../components/UI/BreadCrumbs';
import PhoneInput from '../../components/UI/PhoneInput';
import FormInput from '../../components/UI/FormInput';
import FormTextArea from '../../components/UI/FormTextArea';
import Btn from '../../components/UI/Btn';
import CheckBox from '../../components/UI/CheckBox';
import { useEffect } from 'react';
import { useParams } from '@remix-run/react';

const articleID = () => {
  const params = useParams();
  const id = params.articleId;
  const ArticleContent = () => {
    const ArticleBlockBig = () => {
      return (
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-lg lg:text-3xl">Строительство террасы из дерева</h3>
          <p className="font-medium text-sm lg:text-lg">
            Для того чтобы сделать свой участок максимально комфортным, многие владельцы загородных
            и дачных домов строят беседки, веранды, или террасы. Это места, предназначенные для
            отдыха на открытом воздухе и защищенные от дождя и солнца. Решение сделать террасу на
            даче своими руками принимают многие. Но далеко не все знают об особенностях такой малой
            архитектурной формы и ее отличиях от других пристроек. Важно понимать, что веранда и
            терраса – это два разных вида МАФ. Их ключевое отличие в том, что в первом варианте
            предусмотрено остекление, а во втором – это открытая площадка. Итак, в этой статье мы
            разберем, как делается терраса на даче своими руками. Приступим!
          </p>
          <img src="/assets/ArticlePicBig.png" />
          <p className="font-medium text-sm lg:text-lg">
            Для того чтобы сделать свой участок максимально комфортным, многие владельцы загородных
            и дачных домов строят беседки, веранды, или террасы.{' '}
          </p>
        </div>
      );
    };
    const ArticleBlockSmall = ({ className }) => {
      return (
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg lg:text-3xl">
            Как сделать террасу на даче своими руками?
          </h3>
          <div className={`flex gap-8 ${className}`}>
            <p className="font-medium text-sm lg:text-lg">
              Для того чтобы сделать свой участок максимально комфортным, многие владельцы
              загородных и дачных домов строят беседки, веранды, или террасы. Это места,
              предназначенные для отдыха на открытом воздухе и защищенные от дождя и солнца. Решение
              сделать террасу на даче своими руками принимают многие. Но далеко не все знают об
              особенностях такой малой архитектурной формы и ее отличиях от других пристроек. Важно
              понимать, что веранда и терраса – это два разных вида МАФ. Их ключевое отличие в том,
              что в первом варианте предусмотрено остекление, а во втором – это открытая площадка.
              Итак, в этой статье мы разберем, как делается терраса на даче своими руками.
              Приступим!
            </p>
            <img src="/assets/ArticlePic.png" className="w-[470px] h-[280px]" />
          </div>
        </div>
      );
    };
    return (
      <Section>
        <div className="container mx-auto text-black px-4">
          <div className="flex flex-col">
            <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-5 items-center lg:items-start">
              <img src="/assets/RedLine.svg" alt="" className="mt-5" />

              <h3 className="font-days uppercase mx-auto text-3xl lg:text-5xl text-center lg:text-start">
                Терраса на даче своими <br /> руками. Пошаговый план
              </h3>
            </div>
            <p className="text-sm lg:text-lg text-[#B6B6B6] text-center lg:text-start my-2 lg:my-4">06.09.2022</p>
            <div className="flex flex-col gap-10">
              <p className="font-medium text-sm lg:text-lg">
                Для того чтобы сделать свой участок максимально комфортным, многие владельцы
                загородных и дачных домов строят беседки, веранды, или террасы. Это места,
                предназначенные для отдыха на открытом воздухе и защищенные от дождя и солнца.
                Решение сделать террасу на даче своими руками принимают многие. Но далеко не все
                знают об особенностях такой малой архитектурной формы и ее отличиях от других
                пристроек. Важно понимать, что веранда и терраса – это два разных вида МАФ. Их
                ключевое отличие в том, что в первом варианте предусмотрено остекление, а во втором
                – это открытая площадка. Итак, в этой статье мы разберем, как делается терраса на
                даче своими руками. Приступим!
              </p>
              <ArticleBlockSmall className="flex-col lg:flex-row" />
              <ArticleBlockBig />
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-lg lg:text-3xl">
                  Как сделать террасу на даче своими руками?
                </h3>
                <ul className="list-disc font-medium text-sm lg:text-lg pl-10">
                  <li>
                    Для того чтобы сделать свой участок максимально комфортным, многие владельцы
                    загородных и дачных домов строят беседки, веранды, или террасы.
                  </li>
                  <li>
                    Это места, предназначенные для отдыха на открытом воздухе и защищенные от дождя
                    и солнца.
                  </li>
                  <li>Решение сделать террасу на даче своими руками принимают многие.</li>
                  <li>
                    Но далеко не все знают об особенностях такой малой архитектурной формы и ее
                    отличиях от других пристроек. Важно понимать, что веранда и терраса – это два
                    разных вида МАФ.{' '}
                  </li>
                </ul>
              </div>
              <ArticleBlockSmall className="flex-col-reverse lg:flex-row-reverse" />
              <ArticleBlockBig />
            </div>
          </div>
        </div>
      </Section>
    );
  };
  const ArticleConsult = () => {
    return (
      <Section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-5 text-black">
            <div>
              <h3 className="font-days text-center uppercase text-3xl lg:text-5xl">
                остались вопросы
                <br /> или нужна консультация
              </h3>
              <p className="text-2xl lg:text-3xl text-center">
                <span className="font-bold">по вашему объекту.</span> Оставьте заявку и наш менеджер{' '}
                <br /> свяжется с вами чтобы проконсультировать
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center">
              <FormInput
                className="w-[300px] lg:w-[380px] h-[75px]"
                placeholder="Введите ваше имя"
              />
              <PhoneInput
                className="w-[300px] lg:w-[380px] h-[75px]"
                placeholder="Ваш номер телефона"
              />
            </div>
            <FormTextArea className="w-[300px] lg:w-[780px] h-[122px]" placeholder="Ваш вопрос" />
            <Btn className="btn btn-primary w-[300px] lg:w-[420px] h-[85px] text-xl">Отправить</Btn>
            <div className="flex gap-2">
              <CheckBox className="w-5 h-5" />
              <p className="text-sm text-[#2F222266]">
                Согласен с{' '}
                <a href="#" className="font-Montserrat text-[#4E5CD1]">
                  политикой конфиденциальности <br /> и обработкой моих персональных данных
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  };
  return (
    <MainLayout>
      <div className="header-bg py-6 lg:py-12 ">
        <BreadCrumbs
          className="text-white"
          pages={[
            { name: 'Главная', path: '/' },
            { name: 'Полезная информация', path: '/articles' },
            { name: 'Терраса на даче своими руками. Пошаговый план', path: '/articles/id' },
          ]}
        />
      </div>
      <ArticleContent />
      <ArticleConsult />
      <Subscribe />
    </MainLayout>
  );
};

export default articleID;
