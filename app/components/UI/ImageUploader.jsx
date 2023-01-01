import Btn from './Btn';
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';

const ImageUploader = ({ className }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper flex">
          <div
            className={`border-2 border-[#0000001F] border-dashed py-8 px-8 ${className}`}
            {...dragProps}>
            {imageList.length==0 && (
              <div className="flex flex-col">
                <div className="font-medium text-sm mb-2">
                  <p>Перетащите сюда файл .jpg .png .pdf .doc</p>
                  <p className="text-[#2F222299]">или нажмите на кнопку</p>
                </div>
                <Btn
                  className="btn-secondary rounded-md text-xs w-[180px] h-10"
                  onClick={onImageUpload}>
                  Прикрепить файл
                </Btn>
              </div>
            )}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" className="" />
                <div className="flex gap-2 items-center">
                  <button onClick={() => onImageUpdate(index)}>Обновить</button>
                  <i
                    className="fa-sharp cursor-pointer fa-solid fa-xmark"
                    onClick={() => onImageRemove(index)}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  );
};
export default ImageUploader;
