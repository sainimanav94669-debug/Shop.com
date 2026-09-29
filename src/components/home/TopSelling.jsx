import ProductSection from "./ProductSection";

const products = [
  {
    id: 1,
    image: "/images/webp/striped-shirt.webp",
    name: "Vertical Striped Shirt",
    rating: "5.0",
    price: "212",
    oldPrice: "232",
    discount: "20",
  },
  {
    id: 2,
    image: "/images/webp/graphic-tshirt.webp",
    name: "Courage Graphic T-shirt",
    rating: "4.0",
    price: "145",
  },
  {
    id: 3,
    image: "/images/webp/shorts.webp",
    name: "Loose Fit Bermuda Shorts",
    rating: "3.0",
    price: "80",
  },
  {
    id: 4,
    image: "/images/webp/jeans.webp",
    name: "Faded Skinny Jeans",
    rating: "4.5",
    price: "210",
  },
];

const TopSelling = () => {
  return (
    <ProductSection
      title="Top Selling"
      products={products}
      divider={false}
    />
  );
};

export default TopSelling;