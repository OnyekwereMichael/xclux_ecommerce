'use  client'
import React, { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import assets from '../../assets/asset'
import { AiOutlineShopping } from 'react-icons/ai'



import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../components/ui/sheet";
import Image from 'next/image';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { getLoggedInUser } from '../lib/action/user.server';
import Logout from './Logout';


const MobileNav = () => {
  const { handleCartClick } = useShoppingCart();
  const [loggedInUser, setLoggedInUser] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  console.log("Logged in user:", loggedInUser);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='flex justify-between items-center px-3 '>
      <div className='flex gap-4 items-center '>
        <div>
          <Sheet>
            <SheetTrigger><HiMenu size={24} className='text-white' /></SheetTrigger>
            <SheetContent side='left' className="bg-black opacity-80 h-[50%] mt-14">
              <SheetHeader>
                <SheetTitle>
                  <p className='text-[20px] font-semibold text-white my-5'>Xclux Store</p>
                </SheetTitle>
                <SheetDescription>
                  <ul className="text-white capitalize flex flex-col gap-4">
                  <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <Link href="/home" className='text-[#C3D4E9]'>Shop Now</Link>
                      </SheetClose>
                    </li>
                    <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <Link href="/collections" className='text-[#C3D4E9]'>Our Collections</Link>
                      </SheetClose>
                    </li>
                    <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <Link href="/about" className='text-[#C3D4E9]'>About The Brand</Link>
                      </SheetClose>
                    </li>
                    <li className='text-[18px] my-5'>
                      <SheetClose asChild>
                        <Link href="/contact" className='text-[#C3D4E9]'>Contact Us</Link>
                      </SheetClose>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Image src={assets.logo} alt="XsLogo" width='38' />

      <div className='flex gap-4 items-center'>
        <AiOutlineShopping className='text-white text-[30px]' onClick={() => {
          handleCartClick()
        }}/>
         {/* <FaShareAlt className='text-white text-2xl' /> */}
         {/* <AiOutlineLogout style={{ marginRight: "8px", color: "white", fontSize: "24px" }} onClick={() => {
            Logout()
         }}/> */}
         {loggedInUser && (
         <div
         className="bg-gray-600 w-[33px] h-[33px] rounded-[50%] flex justify-center items-center"
       >
         <span className="text-white font-bold text-[21px] capitalize">
           {loggedInUser.name.charAt(0)}
         </span>
       </div>
      ) }
      <Logout />
      </div>
    </div>
  )
}

export default MobileNav;
