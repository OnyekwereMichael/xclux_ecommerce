'use client'
import React from 'react'
import { FiMapPin, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import assets from '@/assets/asset';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Footer = () => {
  const pathName = usePathname();
  const hideNavbarRoutes = ['/sign-in', '/sign-up', '/'];
  if (hideNavbarRoutes.includes(pathName)) return null;

  return (
    <footer className='bg-black py-10  px-10 max-sm:px-5 '>
      <section className='flex justify-around max-sm:flex-col-reverse'>
        <section className='grid grid-cols-2  gap-10 max-sm:'>
          <div className='flex  gap-10 max-sm:flex-col-reverse'>
            <div>
              <h1 className='text-white text-[19px] font-medium whitespace-nowrap'>Payment Methods</h1>
              <div className='flex gap-3 items-center'>
                <Image src={assets.mastercard} alt="" className='w-[40px] h-[40px] object-cover' />
                <Image src={assets.visacard} alt="" className='w-[60px] h-[60px] object-cover' />
                {/* <Image src={assets.vervecard} alt="" className='w-[60px] h-[60px] object-cover' /> */}
                <Image src={assets.stripe} alt="" className='w-[60px] h-[60px] object-cover' />
              </div>
            </div>

            <div className='flex flex-col gap-3 max-sm:mt-[15px]'>
              <h1 className='text-white text-[19px] max-sm:[18px] font-medium '>Get help</h1>
              <a href="" className='text-[#7E7E7E] underline underline-offset-2 hover:text-white cursor-pointer text-[17px] max-sm:[16px]'>help center</a>
              <a href="" className='text-[#7E7E7E] underline underline-offset-2 hover:text-white cursor-pointer text-[17px] max-sm:[16px]'>track order</a>
              <a href="" className='text-[#7E7E7E] underline underline-offset-2 hover:text-white cursor-pointer text-[17px] max-sm:[16px]'>retrun policy</a>
              <a href="" className='text-[#7E7E7E] underline underline-offset-2 hover:text-white cursor-pointer text-[17px] max-sm:[16px]'>retrun policy
              </a>
            </div>
          </div>

          <div className='flex flex-col gap-3 max-sm:mt-[15px]'>
            <h1 className='text-white text-[19px] font-medium max-sm:[18px]'>Contact Us </h1>
            <div className='flex items-center gap-2 my-3'>
              <FiPhone size={22} className='text-[#7E7E7E]' />
              <p className='text-[#7E7E7E] hover:text-white cursor-pointer text-[17px] max-sm:[16px]'>2348131510808</p>
            </div>

            <div className='flex items-center gap-2 my-3'>
              <FiMapPin size={22} className='text-[#7E7E7E]' />
              <p className='text-[#7E7E7E] hover:text-white cursor-pointer text-[17px] max-sm:[16px]'> Business Has No Physical Address</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h1 className='text-white text-[19px] font-medium capitalize max-sm:[18px]'>signup to our newsletter + offers</h1>
          </div>

          <div className='flex flex-col gap-[20px] mt-5'>
            <div className=" p-[12px] w-[400px] flex items-center justify-between text-white focus-within:border-[2px]  border-[#7E7E7E] border-[1px] border-solid max-sm:w-[100%] ">
              <div className="flex  gap-32 max-sm:gap-24 ">
                <input
                  type="text"
                  className="bg-transparent outline-none rounded-xl "
                  placeholder="Enter your email address"
                />
                <IoIosArrowForward size={26} className='text-[#7E7E7E] bg-white bg-contain h-full w-full rounded-[5px] shadow-md p-[10px] max-sm:hidden ' />
              </div>
            </div>
            <p className='text-[#7E7E7E] text-[16px] leading-normal'>Be the first to know when we have new offers. By signing up you agree<br className='hidden sm:hidden lg:flex' /> to XCLUX DESIGNERS terms and policy</p>
            <div className='flex items-center gap-6'>
              <FaInstagram size={22} className='text-[#7E7E7E]' />
              <FiMessageSquare size={22} className='text-[#7E7E7E]' />
            </div>
          </div>
        </section>
      </section>

      <div className='flex justify-between mt-[30px] px-10 max-sm:flex-col max-sm:px-0'>
        <p className='text-white font-medium  text-[16px] '>@XCLUX DESIGNERS | 2024 All Rights Reserved</p>
        <a href="" className='text-[#7E7E7E] underline underline-offset-2'>credit</a>
      </div>
    </footer>
  )
}

export default Footer
