export default function Btn({ kind, className, children }) {
  return (
    <button
      className={`
        ${kind}
        btn
        text-white
        duration-300
        ${className}`}>
      {children}
    </button>
  );
}
