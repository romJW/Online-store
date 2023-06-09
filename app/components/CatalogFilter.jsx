import { useState } from 'react';

const colors = [
  'FilterColor1.png',
  'FilterColor2.png',
  'FilterColor3.png',
  'FilterColor4.png',
  'FilterColor5.png',
  'FilterColor6.png',
];

const FilteredItem = ({ name }) => {
  return (
    <div className={`flex gap-2 items-center text-sm lg:text-base font-semibold cursor-pointer`}>
      <input
        id={name}
        type="checkbox"
        className="checkbox border-white active:border-white checkbox-error checkbox-xs w-6 h-6 shadow-2xl bg-white"
      />
      <label for={name}>{name}</label>
    </div>
  );
};

const FilterBar = () => {
  return (
    <div className="mx-auto border-2 border-white w-[250px] lg:w-[320px] mt-4 mb-2 lg:mt-5 lg:mb-5"></div>
  );
};

export const CatalogMobileFilter = ({
  FilteredItemColor,
  FilteredtemAppointment,
  FilteredItemBoard,
  FilteredItemCover,
}) => {
  const [isCatalogClicked, setCatalogClicked] = useState(false);
  const [isColorClicked, setColorClicked] = useState(true);
  const [isAppointClicked, setAppointClicked] = useState(true);
  const [isVarietyClicked, setVarietyClicked] = useState(true);
  const [isCoverClicked, setCoverClicked] = useState(true);
  const [activeColor, setActiveColor] = useState([]);

  
  const onSelect = (id) => {
    if (activeColor.length == 0) {
      setActiveColor([id]);
    } else if (activeColor.includes(id)) {
      activeColor.splice(activeColor.indexOf(id), 1);
      setActiveColor([...activeColor]);
    } else if (!activeColor.includes(id)) {
      setActiveColor([...activeColor, id]);
    }
  };
  const onClear = (e) => {
    e.stopPropagation();
    setActiveColor([]);
  };
  return (
    <div className="mx-auto w-full lg:w-[280px] bg-[#FDF7F2] text-black rounded-[20px] py-6 px-4 block lg:hidden">
      <div
        className="flex justify-between duration-300"
        onClick={() => setCatalogClicked(!isCatalogClicked)}>
        <div className="flex gap-2">
          <img src="/assets/filter.svg" />
          <h3 className="text-lg font-extrabold">Фильтр</h3>
        </div>
        {isCatalogClicked ? (
          <i className="fa-sharp fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-sharp fa-solid fa-chevron-down"></i>
        )}
      </div>

      {isCatalogClicked && (
        <>
          <div className="flex flex-col">
            <FilterBar />
            {FilteredItemColor && (
              <div className="Сolor">
                <div
                  className="flex justify-between"
                  onClick={() => setColorClicked(!isColorClicked)}>
                  <div className="flex gap-4 items-center mb-4">
                    <p className="font-extrabold text-base">Цвет</p>
                    <p
                      className="text-[#A6A79F] border-[#A6A79F]  border-dashed text-sm"
                      onClick={(e) => onClear(e)}>
                      Сбросить
                    </p>
                  </div>
                  {isColorClicked ? (
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                  )}
                </div>
                <div className="dropList mt-4 flex flex-wrap ">
                  {isColorClicked &&
                    FilteredItemColor.map((color) => (
                      <img
                        src={`/assets/${color.col}`}
                        className={`w-14 h-14 duration-500 rounded-[10px] ${activeColor.includes(color.id) && 'activeColor'}`}
                        onClick={() => onSelect(color.id)}
                      />
                    ))}
                </div>
              </div>
            )}
            {FilteredItemColor && <FilterBar />}
            {FilteredtemAppointment && (
              <div className="Appointment">
                <div
                  className="flex justify-between items-center mb-4"
                  onClick={() => setAppointClicked(!isAppointClicked)}>
                  <p className="font-extrabold text-base">Назначения</p>
                  {isAppointClicked ? (
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                  )}
                </div>
                <div className="dropList flex flex-col gap-4">
                  {isAppointClicked &&
                    FilteredtemAppointment.map((appointment) => (
                      <FilteredItem name={appointment} />
                    ))}
                </div>
              </div>
            )}
            {FilteredtemAppointment && <FilterBar />}
            {FilteredItemBoard && (
              <div className="Variants">
                <div
                  className="flex justify-between items-center mb-4"
                  onClick={() => setVarietyClicked(!isVarietyClicked)}>
                  <p className="font-extrabold text-base">Разновидность доски</p>
                  {isVarietyClicked ? (
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                  )}
                </div>
                <div className="dropList flex flex-col gap-2">
                  {isVarietyClicked &&
                    FilteredItemBoard.map((board) => <FilteredItem name={board} />)}
                </div>
              </div>
            )}
            {FilteredItemBoard && <FilterBar />}
            {FilteredItemCover && (
              <div className="Cover">
                <div
                  className="flex justify-between items-center mb-4"
                  onClick={() => setCoverClicked(!isCoverClicked)}>
                  <p className="font-extrabold text-base">Поверхность</p>
                  {isCoverClicked ? (
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                  )}
                </div>
                <div className="dropList flex flex-col gap-2">
                  {isCoverClicked &&
                    FilteredItemCover.map((cover) => <FilteredItem name={cover} />)}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const CatalogFilter = ({
  className,
  FilteredItemColor,
  FilteredtemAppointment,
  FilteredItemBoard,
  FilteredItemCover,
  id,
}) => {
  const [isColorClicked, setColorClicked] = useState(true);
  const [isAppointClicked, setAppointClicked] = useState(true);
  const [isVarietyClicked, setVarietyClicked] = useState(true);
  const [isCoverClicked, setCoverClicked] = useState(true);
  const [activeColor, setActiveColor] = useState([]);
  const onSelect = (id) => {
    if (activeColor.length == 0) {
      setActiveColor([id]);
    } else if (activeColor.includes(id)) {
      activeColor.splice(activeColor.indexOf(id), 1);
      setActiveColor([...activeColor]);
    } else if (!activeColor.includes(id)) {
      setActiveColor([...activeColor, id]);
    }
  };
  const onClear = (e) => {
    e.stopPropagation();
    setActiveColor([]);
  };
  return (
    <>
      <div
        className={`w-[370px] bg-[#FDF7F2] text-black rounded-[20px] py-8 px-9 hidden lg:block ${className}`}>
        <div className="flex gap-2">
          <img src="/assets/filter.svg" />
          <h3 className="text-lg font-extrabold">Фильтр</h3>
        </div>
        <div className="flex flex-col">
          <FilterBar />
          {FilteredItemColor && (
            <div className="Сolor cursor-pointer">
              <div
                className="flex justify-between "
                onClick={() => setColorClicked(!isColorClicked)}>
                <div className="flex gap-4 items-center">
                  <p className="font-extrabold lg:text-lg cursor-pointer">Цвет</p>
                  <p
                    className="text-[#A6A79F] border-[#A6A79F] border-b border-dashed cursor-pointer"
                    onClick={(e) => onClear(e)}>
                    Сбросить
                  </p>
                </div>
                {isColorClicked ? (
                  <i className="fa-sharp fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                )}
              </div>
              {isColorClicked && (
                <div className="dropList mt-4 flex flex-wrap gap-4 ">
                  {FilteredItemColor.map((color) => (
                    <img
                      src={`/assets/${color.col}`}
                      className={`cursor-pointer rounded-[5px] duration-500 hover:scale-110 ${
                        activeColor.includes(color.id) && 'activeColor'
                      }`}
                      onClick={() => onSelect(color.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          {FilteredItemColor && <FilterBar />}
          {FilteredtemAppointment && (
            <div className="Appointment cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => setAppointClicked(!isAppointClicked)}>
                <p className="font-extrabold lg:text-lg cursor-pointer">Назначения</p>
                {isAppointClicked ? (
                  <i className="fa-sharp fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                )}
              </div>
              <div className="dropList flex flex-col gap-4">
                {isAppointClicked &&
                  FilteredtemAppointment.map((appointment) => <FilteredItem name={appointment} />)}
              </div>
            </div>
          )}
          {FilteredtemAppointment && <FilterBar />}
          {FilteredItemBoard && (
            <div className="Variants cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => setVarietyClicked(!isVarietyClicked)}>
                <p className="font-extrabold lg:text-lg ">Разновидность доски</p>
                {isVarietyClicked ? (
                  <i className="fa-sharp fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                )}
              </div>
              <div className="dropList flex flex-col gap-2">
                {isVarietyClicked &&
                  FilteredItemBoard.map((board) => <FilteredItem name={board} />)}
              </div>
            </div>
          )}
          {FilteredItemBoard && <FilterBar />}
          {FilteredItemCover && (
            <div className="Cover cursor-pointer">
              <div
                className="flex justify-between items-center "
                onClick={() => setCoverClicked(!isCoverClicked)}>
                <p className="font-extrabold lg:text-lg">Поверхность</p>
                {isCoverClicked ? (
                  <i className="fa-sharp fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                )}
              </div>
              <div className="dropList flex flex-col gap-2">
                {isCoverClicked && FilteredItemCover.map((cover) => <FilteredItem name={cover} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};



