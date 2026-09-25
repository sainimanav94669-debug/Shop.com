import React from 'react'

const Logo = () => {
  return (
    <div className='flex py-10 sm:py-10.5 bg-black items-center justify-center lg:gap-23 sm:gap-18 xl:gap-26.5 gap-x-8.5 gap-y-5 flex-wrap sm:px-5 px-4 mb-12.5 sm:mb-18'>
       <div className='flex    items-center justify-center lg:gap-23 sm:gap-18 xl:gap-26.5 gap-8.5  '>
        <img className='sm:w-full w-29' width="166" height="33" src="/public/images/webp/versace.webp" alt="vercase" />
      <img className='sm:w-full w-16' width="91" height="38" src="/public/images/webp/zara.webp" alt="zara" />
      <img className='sm:w-full w-27.25' width="156" height="36" src="/public/images/webp/gucci.webp" alt="gucci" />
       </div>
      <img className='sm:w-[194px] w-31.75' width="194" height="32" src="/public/images/webp/parada.webp" alt="prada" />
      <img className='sm:w-[207px] w-33.75' width="207" height="33" src="/public/images/webp/calvin.webp" alt="calvin" />
    </div>
  )
}

export default Logo
