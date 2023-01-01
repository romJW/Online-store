export default function Btn({ kind, className, children, onClick }) {
  return (
    <button
      className={`
        ${kind}
        btn
        text-white
        duration-300
        ${className}`}
        onClick={onClick}>
      {children}
    </button>
  );
}
