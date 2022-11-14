import PlayBtn from './PlayBtn';

export default function ReviewSwipeCard({ image, review, author, size, className, onClick, path }) {
  return (
    <>
      <div
        className={`flex flex-col w-[570px]  shadow-md rounded-[10px]  pb-8  ${className}`}
        onClick={onClick}>
          <div className={`flex justify-center max-w-[570px] items-center rounded-t-xl bg-cover bg-no-repeat h-[220px] lg:h-[240px]`}
          style={{ background:`url('${image}'`}}>
             <PlayBtn path={path}/>
          </div>
        {/* <img src={image} alt="" className='rounded-[10px] relative'/> */}
        
        <div className="flex flex-col gap-2 px-2 text-sm lg:text-xl text-black">
          <p className="text-black">{review}</p>
          <p className="font-bold">{author}</p>
          <div className="flex text-[#286F2B] gap-2">
            <img src="assets/expand.svg" alt="" />
            <p>Размеры: {size}м2</p>
          </div>
        </div>
      </div>
    </>
  );
}
