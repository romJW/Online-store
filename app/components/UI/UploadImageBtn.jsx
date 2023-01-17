import ImageUploading from 'react-images-uploading';
import { useState, useContext } from 'react';
import Btn from './Btn';
const UploadImageBtn = ({className}) => {
  const [images, setImages] = useState([]);
  const maxNumber = 68;

  const onChange = (imageList, addUpdateIndex) => {
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
        <div>
          {imageList.length == 0 && (
            <Btn
              className={`btn-secondary rounded-md text-base  h-16  ${className}`}
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
  );
};
export default UploadImageBtn;
