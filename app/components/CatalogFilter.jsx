import {useState,useRef,useEffect} from 'react';

const colors = [
  'FilterColor.png',
  'FilterColor.png',
  'FilterColor.png',
  'FilterColor.png',
  'FilterColor.png',
  'FilterColor.png',
];


 const FilteredItem = ({name}) => {
  return (
        <div className={`flex gap-2 items-center text-sm lg:text-base font-semibold cursor-pointer`}>
              <input id={name} type="checkbox" className="checkbox border-white active:border-white checkbox-error checkbox-xs w-6 h-6 shadow-2xl bg-white" />
              <label for={name}>{name}</label>
            </div>
  )
}

const FilterBar = () => {
  return (
    <div className='mx-auto border-2 border-white w-[250px] lg:w-[320px] mt-4 mb-2 lg:mt-5 lg:mb-5'></div>
  )
}


export const CatalogMobileFilter = ({FilteredItemColor,FilteredtemAppointment,FilteredItemBoard,FilteredItemCover }) => {
    const [isColorClicked, setColorClicked] = useState(false);
    const [isAppointClicked, setAppointClicked] = useState(false);
    const [isVarietyClicked, setVarietyClicked] = useState(false);
    const [isCoverClicked, setCoverClicked] = useState(false);
    const [isCatalogClicked, setCatalogClicked] = useState(false);
  return (
    <div className="mx-auto w-full lg:w-[280px] bg-[#FDF7F2] text-black rounded-[20px] py-6 px-4 block lg:hidden">
        <div className='flex justify-between duration-300' onClick={()=>setCatalogClicked(!isCatalogClicked)}>
        <div className="flex gap-2"> 
        <img src='/assets/filter.svg'/>
            <h3 className='text-lg font-extrabold'>Фильтр</h3>
            </div>
            {isCatalogClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
            </div>
      
        {isCatalogClicked && (
            <>
            <div className="flex flex-col">
        <FilterBar />
        {FilteredItemColor && <div className="Сolor">
          <div className="flex justify-between" onClick={()=>setColorClicked(!isColorClicked)}>
            <div className="flex gap-4 items-center mb-4" >
              <p className="font-extrabold text-base">Цвет</p>
              <p className='text-[#A6A79F] border-[#A6A79F] border-b border-dashed text-sm'>Сбросить</p>
            </div>
            {isColorClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          <div className="dropList flex flex-wrap ">
            {isColorClicked && FilteredItemColor.map((color) => (
              <img src={`/assets/${color}`} className="w-14 h-14 " />
            ))}
          </div>
        </div>}
        {FilteredItemColor && <FilterBar />}
       {FilteredtemAppointment && <div className="Appointment" >
          <div className="flex justify-between items-center mb-4" onClick={()=>setAppointClicked(!isAppointClicked)}>
            <p className="font-extrabold text-base">Назначения</p>
            {isAppointClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          <div className="dropList flex flex-col gap-4">
           {isAppointClicked && FilteredtemAppointment.map(appointment=><FilteredItem name={appointment}/>)}
          </div>
        </div>}
        { FilteredtemAppointment && <FilterBar /> }
        { FilteredItemBoard && <div className="Variants" >
          <div className="flex justify-between items-center mb-4" onClick={()=>setVarietyClicked(!isVarietyClicked)}>
              <p className="font-extrabold text-base">Разновидность доски</p>
            {isVarietyClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          <div className="dropList flex flex-col gap-2">
          {isVarietyClicked && FilteredItemBoard.map(board=><FilteredItem name={board}/>)}
          </div>
        </div> }
        { FilteredItemBoard && <FilterBar /> }
       {FilteredItemCover && <div className="Cover">
          <div className="flex justify-between items-center mb-4" onClick={()=>setCoverClicked(!isCoverClicked)}>
              <p className="font-extrabold text-base">Поверхность</p>
              {isCoverClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          <div className="dropList flex flex-col gap-2">
          {isCoverClicked && FilteredItemCover.map(cover=><FilteredItem name={cover}/>)}
          </div>
        </div>}
        </div>
        </>
        )
        }
    </div>
  );
};

export const CatalogFilter = ({className,FilteredItemColor,FilteredtemAppointment,FilteredItemBoard,FilteredItemCover,id}) => {
    const [isColorClicked, setColorClicked] = useState(true);
    const [isAppointClicked, setAppointClicked] = useState(true);
    const [isVarietyClicked, setVarietyClicked] = useState(true);
    const [isCoverClicked, setCoverClicked] = useState(true);
    const [activeColor, setActiveColor] = useState([]);
    const [active, setActive] = useState();
    const onClick = (id) => {
      if(activeColor.length==0){
        setActiveColor([id])
        setActive(true)
      }
       else if(activeColor.includes(id)){
          console.log(activeColor.indexOf(id))
          activeColor.splice(activeColor.indexOf(id),1);
          setActiveColor([...activeColor]);
        }
       
      else  if(!activeColor.includes(id)){
        setActiveColor([...activeColor,id]);
        setActive(true)
        }
        
    };
  return (
    <>
    <div className={`w-[370px] bg-[#FDF7F2] text-black rounded-[20px] py-8 px-9 hidden lg:block ${className}`}>
        <div className="flex gap-2"> 
        <img src='/assets/filter.svg'/>
            <h3 className='text-lg font-extrabold'>Фильтр</h3>
            </div>
      <div className="flex flex-col">
        <FilterBar />
        {FilteredItemColor && <div className="Сolor">
          <div className="flex justify-between " onClick={()=>setColorClicked(!isColorClicked)}>
            <div className="flex gap-4 items-center mb-4 ">
              <p className="font-extrabold lg:text-lg">Цвет</p>
              <p className='text-[#A6A79F] border-[#A6A79F] border-b border-dashed' onClick={(e)=>{ e.stopPropagation();setActive(false);setActiveColor([])}}>Сбросить</p>
            </div>
            {isColorClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          {isColorClicked &&<div className='dropList flex flex-wrap gap-4 '>
            {FilteredItemColor.map((color) => (
              <img src={`/assets/${color.col}`} className={`hover:scale-110 ${(active && activeColor.includes(color.id)) && 'activeColor'}`} onClick={() => {
                onClick(color.id);
                console.log(activeColor);
              }} />
            ))}
          </div>}
        </div>}
        {FilteredItemColor && <FilterBar />}
        {FilteredtemAppointment && <div className="Appointment" >
          <div className="flex justify-between items-center mb-4" onClick={()=>setAppointClicked(!isAppointClicked)}>
            <p className="font-extrabold lg:text-lg">Назначения</p>
            {isAppointClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          <div className="dropList flex flex-col gap-4">
           {isAppointClicked && FilteredtemAppointment.map(appointment=><FilteredItem name={appointment}/>)}
          </div>
        </div> }
        { FilteredtemAppointment && <FilterBar /> }
        {FilteredItemBoard && <div className="Variants" >
          <div className="flex justify-between items-center mb-4" onClick={()=>setVarietyClicked(!isVarietyClicked)}>
              <p className="font-extrabold lg:text-lg">Разновидность доски</p>
            {isVarietyClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          <div className="dropList flex flex-col gap-2">
          {isVarietyClicked && FilteredItemBoard.map(board=><FilteredItem name={board}/>)}
          </div>
        </div> }
        { FilteredItemBoard && <FilterBar /> }
        {FilteredItemCover && <div className="Cover" >
          <div className="flex justify-between items-center mb-4" onClick={()=>setCoverClicked(!isCoverClicked)}>
              <p className="font-extrabold lg:text-lg">Поверхность</p>
              {isCoverClicked ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-sharp fa-solid fa-chevron-down"></i> }
          </div>
          <div className="dropList flex flex-col gap-2">
          {isCoverClicked && FilteredItemCover.map(cover=><FilteredItem name={cover}/>)}
          </div>
        </div>}
      </div>
    </div>
    </>
  );
};



