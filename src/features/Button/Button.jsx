const Button = ({ title, className = "", onclickHandler }) => {
  return (
    <button
      onClick={onclickHandler}
      className={`${className} flex items-center justify-center font-bold w-35 h-12 rounded-lg hover:opacity-80 shadow border border-gray-50 hover:-translate-y-0.5 transition-all duration-150`}
    >
      {title}
    </button>
  );
};

export default Button;
