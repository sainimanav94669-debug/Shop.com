import React from "react";
import Paragraph from "./Paragraph";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F2F0F1]">

      {/* Main Hero */}
      <div className="mx-auto flex w-full max-w-360 flex-col xl:flex-row">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            px-4
            pt-10
            pb-10
            sm:px-8
            md:px-12
            xl:w-[59%]
            lg:px-12
            lg:py-16
            xl:px-23.5
            xl:pb-17.5
            xl:pt-27.5
          "
        >

          {/* Heading */}
          <h1
            className="
              max-w-155
              font-integral
              text-[36px]
              font-bold
              uppercase
              leading-[0.95]
              tracking-[-1.5px]
              text-black
              sm:text-[52px]
              md:text-[60px]
              lg:text-[56px]
              xl:text-[64px]
            "
          >
            Find Clothes
             
            That Matches
            
            Your Style
          </h1>

          {/* Paragraph */}
          <Paragraph
            className="
              sm:mt-8 mt-5 Satoshi
              max-w-137.5
              text-base 
              sm:text-base
            "
          >
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </Paragraph>

          {/* Button */}
          <Button
            className=" Satoshi
              sm:mt-8 mt-6
              w-full
              sm:w-52.5
            "
          >
            Shop Now
          </Button>

          {/* =================================================
              STATISTICS
          ================================================== */}
          <div
            className="
              sm:mt-10 mt-5
               flex flex-wrap xl:flex-nowrap justify-center
               
              gap-x-6.75 gap-y-3.5
              xl:gap-0
              sm:gap-5
              lg:mt-12
            "
          >

            {/* Stat 1 */}
            <div
              className="
                sm:border-r
                sm:border-black/10
                sm:pr-8
              "
            >
              <h2
                className=" Satoshi
                  text-[24px]
                  font-bold
                  leading-[135%]
                  text-black
                  sm:text-[32px]
                  xl:text-[40px]
                "
              >
                200+
              </h2>

              <p
                className=" Satoshi
                  -mt-1
                  text-[12px] 
                  text-black/50
                  xl:text-base leading-5.5
                "
              >
                International Brands
              </p>
            </div>

            {/* Stat 2 */}
            <div
              className="
                sm:border-r
                sm:border-black/10
                sm:px-8
              "
            >
              <h2
                className="
                  Satoshi
                  text-[24px]
                  font-bold
                  leading-[135%]
                  text-black
                  sm:text-[32px]
                  xl:text-[40px]
                "
              >
                2,000+
              </h2>

              <p
                className="
                 Satoshi
                  -mt-1
                  text-[12px] 
                  text-black/50
                  xl:text-base leading-5.5
                "
              >
                High-Quality Products
              </p>
            </div>

            {/* Stat 3 */}
            <div className="sm:pl-8">
              <h2
                className="
                  Satoshi
                  text-[24px]
                  font-bold
                  leading-[135%]
                  text-black
                  sm:text-[32px]
                  xl:text-[40px]
                "
              >
                30,000+
              </h2>

              <p
                className=" Satoshi
                  -mt-1
                  text-[12px] 
                  text-black/50
                  xl:text-base leading-5.5
                "
              >
                Happy Customers
              </p>
            </div>

          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}
        <div
          className="
            relative
            flex
            w-full
            items-end
            justify-center
            overflow-hidden
            lg:w-[50%] mx-auto
          "
        >

          {/* Decorative star - top right */}
          <div
            className="
              absolute
              right-[8%]
              top-[12%]
              z-10
              text-black
              sm:right-[10%]
              lg:right-[7%]
            "
          >
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12.5 w-12.5 sm:h-16.25 sm:w-16.25 lg:h-18.75 lg:w-18.75"
            >
              <path
                d="M35 0C35 0 38.5 20.8 49.6 27.4C55.2 30.8 70 35 70 35C70 35 55.2 39.2 49.6 42.6C38.5 49.2 35 70 35 70C35 70 31.5 49.2 20.4 42.6C14.8 39.2 0 35 0 35C0 35 14.8 30.8 20.4 27.4C31.5 20.8 35 0 35 0Z"
                fill="black"
              />
            </svg>
          </div>

          {/* Decorative star - middle */}
          <div
            className="
              absolute
              left-[8%]
              top-[45%]  
              z-10 px-4
            "
          >
            <svg
              width="45"
              height="45"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8.75 w-8.75 sm:h-11.25 sm:w-11.25"
            >
              <path
                d="M35 0C35 0 38.5 20.8 49.6 27.4C55.2 30.8 70 35 70 35C70 35 55.2 39.2 49.6 42.6C38.5 49.2 35 70 35 70C35 70 31.5 49.2 20.4 42.6C14.8 39.2 0 35 0 35C0 35 14.8 30.8 20.4 27.4C31.5 20.8 35 0 35 0Z"
                fill="black"
              />
            </svg>
          </div>

          {/* Hero Image */}
          <img
            src="/public/images/webp/hero.webp"
            alt="Fashion models wearing stylish clothes"
            className="
              block h-auto
              lg:h-155 min-h-112
              w-full mt-11.5
              max-w-none
              object-cover
              object-center
            "
          />

        </div>
      </div>

    </section>
  );
};

export default Hero;