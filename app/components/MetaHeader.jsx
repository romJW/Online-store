export default function MetaHeader({ className }) {
  return (
    <div className={`${className} w-screen bg-base-300 py-2`}>
      <div className="hidden md:flex container mx-auto justify-between ">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot fa-sm text-gray-200"></i>
            <p className="text-gray-200">Ваш регион:</p>
          </div>
          <select name="select" className="text-white bg-transparent border-none">
            <option value="value1" disable>
              Выберите Город
            </option>
            <option value="value2">Алматы</option>
            <option value="value3">Астана</option>
            <option value="value3">Шымкент</option>
            <option value="value3">Тараз</option>
            <option value="value3">Талдыкорган</option>
            <option value="value3">Усть-Каменогорск</option>
          </select>
        </div>
        <a rel="nofollow" className="text-white" href="mailto:info@abbex.kz">
          info@abbex.kz
        </a>
      </div>
    </div>
  );
}
