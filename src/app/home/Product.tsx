'use client'
import React, { useEffect, useState } from 'react'
import { client } from '../lib/client'
import { AiOutlineShopping } from 'react-icons/ai'
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

interface ProductData {
  _id: string;
  name: string,
  price: number,
   slug: string,
   details: string,
  imageUrl: string;
  categoryName: string
}
const Product: React.FC = () => {
      const fetchProducts = async () => {
        const query = `*[_type == "product"]  {
      _id,
      name,
      price,
      "slug": slug.current,
      "details": details,
       "imageUrl": image[0].asset->url,
        "categoryName": category->name
    }`;
        const data = await client.fetch(query);
        return data;
      };
    
      // Fetching the data from Sanity using react-query
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
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

  if (isError) {
    return <div>Error fetching data. Please try again later.</div>;
  }
  return (
    <div >
     <div className='px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[40%] w-full max-sm:px-2 mb-[44px]'>
      {products.length > 0 ? (
        products.map((product) => (
          <Link href={`/productDetails/${product.slug}`} key={product._id}>
          <div key={product._id} className='relative  max-sm:shadow-md max-sm:px-2 max-sm:pb-2 max-sm:rounded-sm'>
            <div>
            <Image width={500} height={500} src={product.imageUrl} alt={product.name} />
             <div>
              <div className=' outline-none border-0 p-[10px] flex flex-col justify-center items-center absolute lg:bottom-[134px] lg:left-[20px] lg:w-[44px] lg:h-[44px] h-[34px] w-[34px] max-sm:w-[25px] max-sm:h-[25px] bottom-[90px] left-[5%] bg-white opacity-90 rounded-[8px] '>
            <AiOutlineShopping size={14} className='text-black opacity-80 text-3xl max-sm:text-2xl no-underline  font-medium capitalize overflow-hidden whitespace-nowrap text-ellipsis absolute w-full h-full z-2' />
            </div>
            </div>
          
            <h3 className='text-[16px] no-underline lg:text-[20px] font-semibold capitalize text-center py-[4px] overflow-hidden whitespace-nowrap text-ellipsis'>{product.name}</h3>
            <p className='text-black text-opacity-60 text-[13px] lg:text-[18px] font-semibold w-full max-w-[90%] text-right mb-2 capitalize overflow-hidden whitespace-nowrap text-ellipsis max-sm:'>{product.details}</p>
            <p className='text-[16px] lg:text-[22px]   capitalize w-full text-center overflow-hidden whitespace-nowrap text-ellipsis font-semibold'>NGN {product.price}</p>
            </div>
          </div>
     </Link>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
    </div>
  )
}

export default Product
