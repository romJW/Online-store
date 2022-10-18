export default function Input({className,classInput, classIcon}) {
  return (
    <div className={`header__search flex justify-center ${className}`}>
      <input
        className={`header__search-input  h-12 text-black relative px-5 py-4 rounded border border-gray-300 ${classInput}`}
        type="text"
        placeholder="Я ищу..."
      />
      <i className={`fa-solid fa-magnifying-glass fa-lg relative text-gray-300 ${classIcon}`}></i>
    </div>
  );
}
