'use client';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { useShoppingCart } from 'use-shopping-cart';
import Logout from './Logout';
import assets from '../../assets/asset';

declare type User = {
  $id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalcode: string;
  dob: string;
  ssn: string;
};

const Navbar = ({ user }: { user: User }) => {
  const { handleCartClick } = useShoppingCart();
  const pathName = usePathname();

  // Hide the Navbar for specific routes
  const hideNavbarRoutes = ['/sign-in', '/sign-up', '/'];
  if (hideNavbarRoutes.includes(pathName)) return null;

  const links = [
    { name: 'Shop Now', href: '/home' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-black fixed top-0 z-[999] flex justify-between items-center w-full py-[10px] px-[10px]">
      <ul className="text-white capitalize flex gap-[10px] max-xl:hidden">
        {links.map((link, idx) => (
          <p
            key={idx}
            className={`font-semibold whitespace-nowrap p-1 cursor-pointer text-[18px]`}
          >
            {pathName === link.href ? (
              <Link
                href={link.href}
                className="border-b-4 border-white text-[#fff] transition-all duration-300 hover:border-b-4 hover:border-white"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="font-semibold text-[#fff] transition-all duration-300 hover:text-red-900 border-none hover:border-b-4 hover:border-white"
              >
                {link.name}
              </Link>
            )}
          </p>
        ))}
      </ul>

      <Image src={assets.logo} alt="XsLogo" width="40" className="max-xl:hidden" />
      <div className="flex gap-[20px] max-xl:hidden">
        <div className="p-[7px] w-[300px] flex items-center justify-between text-white border-[#C3D4E9] border-[1px] border-solid rounded-full smm:w-[200px]">
          <div className="flex gap-2">
            <Image
              src={assets.searchlogo}
              alt=""
              width="20"
              height="20"
              className=""
            />
            <input
              type="text"
              className="bg-transparent outline-none rounded-xl"
              placeholder="Search something here"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-[10px] items-center max-xl:hidden hover:cursor-pointer">
        <AiOutlineShopping
          className="text-white text-[30px]"
          onClick={() => handleCartClick()}
        />
        <div
          className="bg-gray-600 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"
        >
          <span className="text-white font-bold text-2xl capitalize">
            {user?.name[0]}
          </span>
        </div>
        <Logout />
      </div>

      <div className="hidden max-md:block w-[100vw]">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
