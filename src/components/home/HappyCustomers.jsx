import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const customers = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

const HappyCustomers = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          px-4 sm:px-0 pb-12.5 sm:pb-15 lg:pb-20
          max-w-310 
        "
      >
        {/* Heading */}
        <Heading
          className="
            text-left
           
          "
        >
          Our Happy Customers
        </Heading>

        {/* Cards */}
        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-3
            sm:mt-10
            sm:grid-cols-2
            md:gap-5
            lg:grid-cols-3
          "
        >
          {customers.map((customer) => (
            <article
              key={customer.id}
              className="
                min-h-30.5
                rounded-[10px]
                border
                border-[#E6E6E6]
                bg-white
                p-4
                sm:min-h-33.75
                sm:p-5
              "
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-[14px] leading-none text-[#FFC633] sm:text-[15px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              {/* Customer name */}
              <div className="mt-3 sm:mt-3.75 flex items-center gap-1">
                <h3 className="Satoshi text-base font-bold leading-5 sm:leading-6 text-black sm:text-xl">
                  {customer.name}
                </h3>

                <span className="flex  h-4 w-4 sm:max-h-6 sm:max-w-6 items-center justify-center m-0.5 rounded-full bg-[#00B67A] text-[10px] font-bold text-white">
                  ✓
                </span>
              </div>

              {/* Review using common Paragraph */}
              <Paragraph
                className="Satoshi
                  mt-2 sm:mt-3
                  text-[14px]
                  sm:leading-[138%]!
                  leading-[143%]!
                  sm:text-[14px] 
                  md:text-[16px]
                "
              >
                "{customer.review}"
              </Paragraph>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;