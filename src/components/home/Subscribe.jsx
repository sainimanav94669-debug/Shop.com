import React from 'react'
import Heading from '../common/Heading'

const Subscribe = () => {
    return (
        <section className='flex items-center justify-center px-4.25 md:px-4 -mb-22.5 z-50'>
            <div className='max-w-310 w-full mx-auto flex lg:flex-row flex-col items-center lg:justify-between gap-8 lg:gap-2 bg-black border border-transparent rounded-[20px] pt-8 pb-7 md:py-8.75 px-[23.5px] sm:px-9 md:px-12 lg:px-16'>
                <div className='max-w-137.75 w-full '>
                    <Heading className=' text-white text-[32px]! sm:text-4xl! md:text-[38px]! lg:text-[40px]! leading-[109%]! md:leading-[117.5%]! text-start!'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</Heading>
                </div>

                <div className='max-w-87.25 w-full flex flex-col gap-3 md:gap-3.5 items-center'>

                    {/* Email Input */}
                    <div className="flex h-10.5 md:h-12 w-full items-center gap-3 rounded-full bg-white px-4">
                        
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z" fill="black" fill-opacity="0.4" />
                            </svg>
                        </span>

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="Satoshi w-full bg-transparent font-normal text-sm md:text-base leading-[100%] text-black outline-none placeholder:text-[#999999]"
                        />
                    </div>

                    {/* Subscribe Button */}
                    <button
                        type="button"
                        className="Satoshi h-10.5 md:h-11.5 w-full rounded-full bg-white text-base font-medium leading-[100%] text-black transition hover:bg-gray-100"
                    >
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe