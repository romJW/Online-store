export default function Btn({ kind, className, children }) {
    return (
      <button
        className={`
          ${kind}
          btn
          font-normal
          text-white
          shadow-3xl  
          transition
          duration-150
          ${className}`}>
        {children}
      </button>
    );
  }
  