import CheckBox from './CheckBox';
const Agreement = () => {
  return (
    <div className="flex justify-center gap-2 px-2">
      <CheckBox className="w-5 h-5" />
      <p className="text-sm text-[#2F222266]">
        Согласен с{' '}
        <a href="#" className="font-mont text-[#4E5CD1]">
          политикой конфиденциальности <br className="hidden lg:block" /> и обработкой моих
          персональных данных
        </a>
      </p>
    </div>
  );
};
export default Agreement;
