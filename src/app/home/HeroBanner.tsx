'use client';
import React, { useState, useEffect } from 'react';
import assets from '../../assets/asset';
import Image from 'next/image';
import { client } from '../lib/client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

// Type definition for banner data
interface BannerData {
  _id: string;
  smallText: string;
  buttonText: string;
  imageUrl: string;
}


const fetchBannerDetails = async () => {
  const query = `
    *[_type == "banner"] | order(_createdAt desc)[0]{
      _id,
      smallText,
      buttonText,
      "imageUrl": image.asset->url
    }`;
  const data = await client.fetch(query);
  return data;
};

const HeroBanner: React.FC = () => {
    const links =
    [      
        {name:'ALL', href: '/'},
        {name:'TOP', href: '/Top'},
        {name:'BOTTOMS', href: '/Bottom'},
        {name:'CAPS & HAT', href: '/Caps'},

]

const pathName = usePathname()
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBannerDetails();
        setBanner(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching banner details:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className='flex justify-center items-center h-[100vh] text-center'><Loader2 size={40} className='animate-spin' /></div>;
  }

  if (isError || !banner) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="relative px-10 max-sm:px-0 mt-14 ">
      <div className="relative max-h-[3840px] h-[calc(100%-58px)] max-sm:max-h-[1000px] max-sm:h-[calc(100%-48px)]">
        <Image
          src={banner.imageUrl}
          alt="Banner Image"
          className="object-cover object-left-top h-fit w-[100%] max-xl:hidden "
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="https://shorturl.at/zBGeY"
          alt="Fallback Image"
          className="hidden max-md:flex"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[168px] text-center text-white">
          <p className="text-[28px] uppercase font-medium mb-2">{banner.smallText}</p>
          <div className="flex items-center gap-2 font-extralight text-[16px] px-4 py-2 text-white border border-white w-[fit-content] h-[fit-content] hover:border-[#A3A1A1] rounded-[24px]">
            <Image src={assets.arrow} alt="Arrow Icon" width={30} height={30} />
            <Link href={'/collections'} type="submit" className="uppercase font-semibold text-[18px]">
              {banner.buttonText}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 uppercase text-[20px] font-extralight mt-5 max-sm:gap-2 max-sm:mb-8 max-sm:text-[14px] max-sm:px-2">
      {links.map((link, idx) => (
             <p key={idx}  className={`font-semibold whitespace-nowrap p-1 cursor-pointer text-[18px]`}>
                  {pathName === link.href ? (
                     <Link href={link.href} className='border-b-4 border-white text-[#000] tranistion-all duration-300'>{link.name}</Link>
                  ): (
                      <Link href={link.href} className='font-semibold  text-gray-600 tranistion-all duration-300 hover:text-red-900 border-none'>{link.name}</Link>
                  )}
             </p>
      ))}
      </div>
    </div>
  );
};

export default HeroBanner;
