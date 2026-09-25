const ProductCard = ({
  image,
  name,
  rating,
  price,
  oldPrice,
  discount,
}) => {
  return (
    <article className="min-w-0">
      {/* Product Image */}
      <div
        className="
          aspect-square
          w-full
          overflow-hidden rounded-[13px]
          sm:rounded-[20px]
          bg-[#F0F0F0]">
        <img
          src={image}
          alt={name}
          className="
            h-full lg:min-h-[298px]
            w-full
            object-contain
            p-2
            transition-transform
            duration-300
            hover:scale-105
            sm:p-3
          "
        />
      </div>

      {/* Product Name */}
      <h3
        className="
          sm:mt-4 mt-2.5
          truncate
          text-base
          font-bold
          leading-[135%]
          text-black
          sm:text-xl
           
        "
      >
        {name}
      </h3>

      {/* Rating */}
      <div className="sm:mt-2 mt-1 flex items-center gap-3.25">
        <div >
          <span><svg width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z" fill="#FFC633"/>
<path d="M33.0468 0L35.666 5.63991L41.8393 6.38809L37.2848 10.6219L38.4809 16.7243L33.0468 13.701L27.6128 16.7243L28.8089 10.6219L24.2544 6.38809L30.4276 5.63991L33.0468 0Z" fill="#FFC633"/>
<path d="M56.8487 0L59.4679 5.63991L65.6412 6.38809L61.0867 10.6219L62.2827 16.7243L56.8487 13.701L51.4147 16.7243L52.6107 10.6219L48.0562 6.38809L54.2295 5.63991L56.8487 0Z" fill="#FFC633"/>
<path d="M80.6506 0L83.2698 5.63991L89.4431 6.38809L84.8886 10.6219L86.0846 16.7243L80.6506 13.701L75.2166 16.7243L76.4126 10.6219L71.8581 6.38809L78.0314 5.63991L80.6506 0Z" fill="#FFC633"/>
<path d="M98.566 16.7243L104 13.701V0L101.381 5.63991L95.2075 6.38809L99.762 10.6219L98.566 16.7243Z" fill="#FFC633"/>
</svg>
</span>
           
        </div>

        <span className="text-xs text-black sm:text-sm leading-[136%]">
          {rating} <span className="text-black opacity-60">/5</span>
        </span>
      </div>

      {/* Price */}
      <div className="sm:mt-2 mt-1 flex flex-wrap items-center gap-2.5">
        <span className= "font-bold text-black text-xl sm:text-2xl! leading-[134%]">
          ${price}
        </span>

        {oldPrice && (
          <span className="text-xl sm:text-2xl! leading-[134%] text-black opacity-40 line-through">
            ${oldPrice}
          </span>
        )}

        {discount && (
          <span
            className="
              rounded-full
              bg-[#FF3333]/10
               leading-[133%]
               px-3.25 py-1.5
               text-[10px]
              font-medium sm:min-w-14.5
              text-[#FF3333]
              sm:text-[12px]
            "
          >
            -{discount}%
          </span>
        )}
      </div>
    </article>
  );
};

export default ProductCard;