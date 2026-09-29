const Paragraph = ({ children, className = "" }) => {
  return (
    <p
      className={` text-sm sm:text-base leading-[120%] sm:leading-[104%] text-black opacity-60 ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;