import { useContext, useState, useEffect } from 'react';
import { ModalInstructionVidContext } from '../../contexts/context';
import PlayBtn from '../UI/PlayBtn';
import CheckBox from '../UI/CheckBox';
const Modal = () => {
  const { isInstructionVidModalOpen, setInstructionVidModalOpen } = useContext(
    ModalInstructionVidContext,
  );
  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div
          className="w-[280px] lg:w-[970px] h-[160px] lg:h-[560px] text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] flex items-center justify-center bg-cover bg-no-repeat overflow-auto"
          style={{ backgroundImage: "url('assets/Instruction.png')" }}>
          <PlayBtn />
        </div>
        <i
          onClick={() => setInstructionVidModalOpen(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-0 lg:right-[-40px] top-[-50px]"></i>
      </div>
    </>
  );
};
export default function ModalInstructionVideo() {
  const { isInstructionVidModalOpen, setInstructionVidModalOpen } = useContext(
    ModalInstructionVidContext,
  );
  return (
    <>
      {isInstructionVidModalOpen && (
        <>
          <div
            onClick={() => setInstructionVidModalOpen(false)}
            className="blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
