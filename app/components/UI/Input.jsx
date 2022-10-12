export default function Input({className, icon}) {
  return (
    <div className={`header__search flex justify-center ${className}`}>
      <input
        className="header__search-input w-72 h-12 text-black relative px-5 py-4 rounded border border-gray-300"
        type="text"
        placeholder="Я ищу..."
      />
      <i className={`fa-solid fa-magnifying-glass fa-lg relative text-gray-300 ${icon}`}></i>
    </div>
  );
}
