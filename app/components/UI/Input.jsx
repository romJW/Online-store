import InputMask from 'react-input-mask';
export default function Input({ className, placeholder }) {
  return (
    <div
      className={`${className} input input-bordered w-full rounded flex items-center justify-between border-gray-300`}>
      <input className={`outline-none `} type="text" placeholder={placeholder} />
      <i className={`fa-solid fa-magnifying-glass fa-lg relative text-gray-300`}></i>
    </div>
  );
}
