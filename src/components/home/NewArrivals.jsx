import ProductSection from "./ProductSection";

const products = [
  {
    id: 1,
    image: "/images/webp/t-shirt.webp",
    name: "T-shirt with Tape Details",
    rating: "4.5",
    price: "120",
  },
  {
    id: 2,
    image: "/images/webp/skinny-jeans.webp",
    name: "Skinny Fit Jeans",
    rating: "3.5",
    price: "240",
    oldPrice: "260",
    discount: "20",
  },
  {
    id: 3,
    image: "/images/webp/check-shirt.webp",
    name: "Checkered Shirt",
    rating: "4.5",
    price: "180",
  },
  {
    id: 4,
    image: "/images/webp/striped-tshirt.webp",
    name: "Sleeve Striped T-shirt",
    rating: "4.5",
    price: "130",
    oldPrice: "160",
    discount: "30",
  },
];

const NewArrivals = () => {
  return (
    <ProductSection 
      title="New Arrivals"
      products={products}
      divider={true}
    />
  );
};

export default NewArrivals;