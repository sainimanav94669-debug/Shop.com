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
        text-white
        transition
        duration-200
        hover:bg-black/80
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;