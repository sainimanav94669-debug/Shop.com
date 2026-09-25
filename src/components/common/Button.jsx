const Button = ({
  children,
  className = "",
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-black
        px-16.75
        py-3.5
        text-base
        font-medium
        text-white leading-[140%]
        transition
        duration-300 cursor-pointer
        hover:bg-white hover:text-black border border-black
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;