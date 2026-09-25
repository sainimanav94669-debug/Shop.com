import Heading from "../common/Heading";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

const ProductSection = ({
  title,
  products,
  divider = true,
}) => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-310
          px-4
          
          sm:px-6  
           
          md:px-8
          lg:px-10
          xl:px-0
        "
      >
        {/* Heading */}
        <Heading className="leading-[120%]">{title}</Heading>

        {/* Product Grid */}
        <div
          className=" Satoshi
            mt-8
            grid
            grid-cols-2
            gap-4 
            sm:gap-y-8
            md:grid-cols-3
            lg:grid-cols-4
            lg:gap-x-5
            xl:mt-13.75
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              rating={product.rating}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
            />
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-7 flex justify-center sm:mt-9">
          <Button className="Satoshi bg-white text-black! border-[#E6E6E6] font-medium border hover:text-white! text-base py-3.75 px-20 leading-[128%]! w-full sm:max-w-[218px] hover:bg-black! cursor-pointer transition-all duration-300">
            View All
          </Button>
        </div>

        {/* Divider */}
        {divider && (
          <div className="my-10 w-full border-b border-black/10 sm:my-16!" />
        )}
      </div>
    </section>
  );
};

export default ProductSection;