import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import Btn from '../components/UI/Btn';
import PlayBtn from '../components/UI/PlayBtn';
import Consult from '../components/Consult';
import Subscribe from '../components/Subscribe';
import Section from '../components/UI/Section';
import FormInput from '../components/UI/FormInput';
import { useState } from 'react';
import { useContext } from 'react';
import { ModalInstructionContext, ModalInstructionVidContext } from '../contexts/context';
const textInstructions = [
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    memory: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    memory: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    memory: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    memory: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    memory: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    memory: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    memory: '3,8',
  },
];
const videoInstructions = [
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    length: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    length: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    length: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    length: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    length: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    length: '3,8',
  },
  {
    image: 'Instruction.png',
    title: 'Инструкция по монтажу ступеней из ДПК «WOODGRAND»',
    list: ['Необходимые материалы', ' Общие указания', 'Этапы монтажа'],
    length: '3,8',
  },
];
const instructions = () => {
  const [isVideo, setVideo] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const CategoryItem = ({ icon, text, onClick, className, children }) => {
    return (
      <div
        onClick={onClick}
        className={`w-full lg:w-1/2 font-extrabold text-base lg:text-xl py-5 lg:py-8 flex gap-2 justify-center items-center ${className}`}>
        <img src={`/assets/${icon}`} className="scale-75 lg:scale-100" />
        <p>{text}</p>
        {children}
      </div>
    );
  };
  const InstructionCard = ({ image, title, list, memory }) => {
    const { isInstructionModalOpen, setInstructionModalOpen } = useContext(ModalInstructionContext);
    return (
      <div className="mx-auto container">
        <div className="flex flex-col lg:flex-row">
          <img src={`/assets/${image}`} />
          <div className="flex flex-col pl-6">
            <p className="font-bold text-lg lg:text-3xl mb-2">{title}</p>
            <ul className="list-disc text-sm lg:text-xl ml-5 mb-8">
              {list.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <Btn
                className="btn-secondary w-[280px] lg:w-[360px] h-20"
                onClick={() => setInstructionModalOpen(true)}>
                Скачать инструкцию
              </Btn>
              <p className="text-[#8D8D8D] text-base ">PDF | {memory} Mb</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const VideoInstructionCard = ({ image, title, list, length }) => {
    const { isInstructionVidModalOpen, setInstructionVidModalOpen } = useContext(
      ModalInstructionVidContext,
    );
    return (
      <div className="mx-auto container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start ">
          <div
            
            className="flex justify-center items-center w-[280px] lg:w-[535px] h-[200px] lg:h-[280px] rounded-[10px] bg-cover bg-no-repeat"
            style={{ background: `url('/assets/${image}'` }}>
            <PlayBtn onClick={() => setInstructionVidModalOpen(true)}/>{' '}
          </div>
          <div className="flex flex-col pl-6">
            <p className="font-bold text-lg lg:text-3xl mb-2">{title}</p>
            <ul className="list-disc text-sm lg:text-xl ml-5 mb-8">
              {list.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <div className="text-[#8D8D8D] text-base flex items-center gap-4">
              <i class="fa-solid fa-clock"></i> <p>{length}</p> мин.
            </div>
          </div>
        </div>
      </div>
    );
  };
  const InstructionBlock = () => {
    return (
      <div className="container mx-auto text-black rounded-[20px] InstructionShadow">
        <div className="flex flex-col ">
          <div className="container mx-auto cursor-pointer hidden lg:flex">
            <CategoryItem
              onClick={() => setVideo(false)}
              icon="PdfInstruction.svg"
              text="Письменные инструкции"
              className={`${isVideo ? '' : 'bg-[#F3DFCE]'} rounded-tl-[20px]`}
            />
            <CategoryItem
              icon="YoutubeInstruction.svg"
              text="Видеоинструкции"
              onClick={() => setVideo(true)}
              className={`  rounded-tr-[20px] ${isVideo ? 'bg-[#F3DFCE]' : 'whiteGradient'}`}
            />
          </div>
          <div className="block lg:hidden container mx-auto">
            {isVideo ? (
              <CategoryItem
                onClick={() => setMobileOpen(!isMobileOpen)}
                text="Видеоинструкции"
                icon="YoutubeInstruction.svg"
                className={`rounded-t-[15px] bg-[#F3DFCE]`}>
                {isMobileOpen ? (
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-chevron-up"></i>
                )}
              </CategoryItem>
            ) : (
              <CategoryItem
                onClick={() => setMobileOpen(!isMobileOpen)}
                text="Письменные инструкции"
                icon="PdfInstruction.svg"
                className={`rounded-t-[15px] bg-[#F3DFCE]`}>
                {isMobileOpen ? (
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-chevron-up"></i>
                )}
              </CategoryItem>
            )}
            {isMobileOpen && (
              <div className="flex flex-col ">
                <CategoryItem
                  onClick={() => {
                    setVideo(false);
                    setMobileOpen(false);
                  }}
                  icon="PdfInstruction.svg"
                  text="Письменные инструкции"
                  className={`${isVideo ? '' : 'bg-[#F3DFCE]'} rounded-t-[15px]`}
                />
                <CategoryItem
                  icon="YoutubeInstruction.svg"
                  text="Видеоинструкции"
                  onClick={() => {
                    setVideo(true);
                    setMobileOpen(false);
                  }}
                  className={`rounded-b-[15px] ${isVideo ? 'bg-[#F3DFCE]' : 'whiteGradient'}`}
                />
              </div>
            )}
          </div>
          {isVideo ? (
            <div className="flex flex-col items-center  gap-10 lg:gap-12 py-4 lg:py-10 px-4 lg:px-12">
              {videoInstructions.map((instruction) => (
                <VideoInstructionCard
                  key={instruction.list}
                  image={instruction.image}
                  title={instruction.title}
                  list={instruction.list}
                  length={instruction.length}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col  gap-10 lg:gap-12 py-4 lg:py-10 px-4 lg:px-12">
              {textInstructions.map((instruction) => (
                <InstructionCard
                  image={instruction.image}
                  title={instruction.title}
                  list={instruction.list}
                  memory={instruction.memory}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <MainLayout>
        <div className="header-bg py-6 lg:py-12 ">
          <div className="container mx-auto text-white">
            <BreadCrumbs
              className="text-white"
              pages={[
                { name: 'Главная', path: '/' },
                { name: 'Инструкции', path: '/instructions' },
              ]}
            />
            <h2 className="mt-2 lg:mt-6 text-3xl lg:text-5xl text-center lg:text-start font-days uppercase">
              ИНСТРУКЦИИ ДЛЯ ИЗДЕЛИЙ ИЗ ДПК
            </h2>
          </div>
        </div>
        <InstructionBlock />
        <Consult
          title="Получите консультацию"
          text={
            <>
              <p>
                <span className="font-bold">по вашему объекту уже сегодня.</span> Оставьте заявку и
                наш менеджер <br /> свяжется с вами чтобы проконсультировать и рассчитать стоимость
              </p>
            </>
          }
        />
        <Subscribe />
      </MainLayout>
    </>
  );
};

export default instructions;
