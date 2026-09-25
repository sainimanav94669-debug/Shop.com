"use client";

import React, { useState } from "react";

const SearchIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"
      fill="currentColor"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z"
      fill="black"
    />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {open ? (
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ) : (
      <path
        d="M3 6H21M3 12H21M3 18H21"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const ChevronDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6L8 11L13 6"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white Satoshi ">

      {/* =====================================================
          TOP OFFER BAR
      ====================================================== */}
      <div className="bg-black px-4 py-2.25">
        <div className="mx-auto flex  max-w-360 items-center gap-106.25 justify-center">
          <p className="Satoshi text-center xl:ml-136 text-[12px] leading-[136%] text-white sm:text-xs md:text-sm">
            Sign up and get 20% off to your first order.
            <span className="ml-1 font-medium underline">
              Sign Up Now
            </span>
          </p>
          <svg className="xl:flex hidden cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2882 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2898C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2898L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5633 4.37418 16.5633C4.12511 16.5633 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3751 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.03828C3.53556 4.86216 3.43662 4.62329 3.43662 4.37422C3.43662 4.12515 3.53556 3.88628 3.71168 3.71016C3.8878 3.53404 4.12668 3.43509 4.37575 3.43509C4.62482 3.43509 4.86369 3.53404 5.03981 3.71016L9.99997 8.67188L14.9617 3.70938C15.1378 3.53326 15.3767 3.43431 15.6257 3.43431C15.8748 3.43431 16.1137 3.53326 16.2898 3.70938C16.4659 3.8855 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.4659 4.86138 16.2898 5.0375L11.3281 10L16.2882 14.9617Z" fill="white"/>
</svg>

        </div>
      </div>

      {/* =====================================================
          DESKTOP NAVBAR
          1024px+
      ====================================================== */}
      <div className="hidden lg:flex justify-center w-full items-center gap-6 px-5 py-6 xl:gap-10">
        
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/images/webp/SHOP.CO.webp"
            alt="SHOP.CO"
            className="h-auto w-35 xl:w-40"
          />
        </a>

        {/* Navigation */}
        <nav className="shrink-0">
          <ul className="flex items-center justify-center gap-4 text-sm leading-[138%] xl:gap-6 xl:text-base">
            
            <li className=" text-black transition-all duration-300">
              <a
                href="#"
                className="flex items-center gap-1 whitespace-nowrap"
              >
                Shop
                <ChevronDown />
              </a>
            </li>

            <li className="   text-black transition-all duration-300">
              <a
                href="#"
                className="whitespace-nowrap"
              >
                On Sale
              </a>
            </li>

            <li className="   text-black transition-all duration-300">
              <a
                href="#"
                className="whitespace-nowrap"
              >
                New Arrivals
              </a>
            </li>

            <li className="  text-black transition-all duration-300">
              <a
                href="#"
                className="whitespace-nowrap"
              >
                Brands
              </a>
            </li>

          </ul>
        </nav>

        {/* Desktop Search */}
        <div className="flex min-w-0 flex-1 items-center gap-3 max-w-136 rounded-[62px] bg-[#F0F0F0] px-4 py-3">
          <SearchIcon className="shrink-0 text-black/40" />

          <input
            type="text"
            placeholder="Search for products..."
            className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-black/40 xl:text-base"
          />
        </div>

        {/* Cart */}
        <a
          href="/cart"
          className="shrink-0"
          aria-label="Cart"
        >
          <CartIcon />
        </a>
      </div>

      {/* =====================================================
          TABLET + MOBILE NAVBAR
          BELOW 1024px
      ====================================================== */}
      <div className="lg:hidden w-full px-4 py-5 sm:px-6">

        {/* Main Row */}
        <div className="flex w-full items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="shrink-0"
            >
              <MenuIcon open={menuOpen} />
            </button>

            {/* Logo */}
            <a href="/" className="shrink-0">
              <img
                src="/images/webp/SHOP.CO.webp"
                alt="SHOP.CO"
                className="h-auto w-31.25 sm:w-36.25"
              />
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">

            {/* Search icon
                ONLY below 768px
            */}
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label={searchOpen ? "Close search" : "Open search"}
              className="shrink-0 md:hidden"
            >
              <SearchIcon />
            </button>

            {/* Search bar
                768px - 1023px
            */}
            <div className="hidden w-55 items-center gap-2 rounded-[62px] bg-[#F0F0F0] px-3 py-2.5 md:flex">
              <SearchIcon className="shrink-0 text-black/40" />

              <input
                type="text"
                placeholder="Search for products..."
                className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-black/40"
              />
            </div>

            {/* Cart */}
            <a
              href="/cart"
              aria-label="Cart"
              className="shrink-0"
            >
              <CartIcon />
            </a>

          </div>
        </div>

        {/* =====================================================
            MOBILE SEARCH
            BELOW 768px
        ====================================================== */}
        {searchOpen && (
          <div className="mt-4 flex w-full items-center gap-3 rounded-[62px] bg-[#F0F0F0] px-4 py-3 md:hidden">
            <SearchIcon className="shrink-0 text-black/40" />

            <input
              autoFocus
              type="text"
              placeholder="Search for products..."
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-black/40"
            />
          </div>
        )}

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {menuOpen && (
          <nav className="mt-5 w-full border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-5 text-base">

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Shop
                  <ChevronDown />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  On Sale
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  Brands
                </a>
              </li>

            </ul>
          </nav>
        )}

      </div>
    </header>
  );
};

export default Header;