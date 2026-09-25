const Heading = ({ children, className = "" }) => {
  return (
    <h2
      className={`
        font-integral
        text-center
        text-[32px] leading-[113%]
        sm:leading-[121%]
        font-bold
        uppercase
        text-black
        sm:text-[40px]
        md:text-[48px]
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

export default Heading;