'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';
import { client } from '@/app/lib/client';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';


interface CategoryData {
    _id: string;
    name: string;
    price: number;
    slug: string;
    imageUrl: string;
  }
const CategoryPage = ({ params }:{params:{category:string}}) => {
    const [category, setCategory] = useState<CategoryData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
  
    // Fetch product data
    const getData = async (category: string)=> {
      const query = `*[_type == "product" && category->name == '${category}']{
  _id,
      name,
      price,
      "slug": slug.current,
      "imageUrl": image[].asset->url,
  'categoryName': category->name
} `;
const data = await client.fetch(query);
return data;
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getData(params.category);
          setCategory(data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching product details:', error);
          setIsError(true);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [params.category]);
  
  
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-[100vh] text-center">
          <Loader2 size={40} className="animate-spin" />
        </div>
      );
    }
  
    if (isError || !category) {
      return <div>Error fetching data. Please try again later.</div>;
    }
    console.log(category);
    
  return (
    <div>
       <div className='py-4 px-4 max-sm:py-1 max-sm:px-1'>
        <p className='text-2xl font-semibold'>Our Products for {params.category}:</p>
     <div className='px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[40%] w-full max-sm:px-4 '>
      {category.length > 0 ? (
        category.map((product) => (
          <Link href={`/productDetails/${product.slug}`} key={product._id}>
          <div key={product._id} className='relative'>
            <div>
            <Image width={500} height={500} src={product.imageUrl[0]} alt={product.name} />
             <div>
              <div className=' outline-none border-0 p-[10px] flex flex-col justify-center items-center absolute lg:bottom-[134px] lg:left-[20px] lg:w-[44px] lg:h-[44px] h-[34px] w-[34px] max-sm:w-[25px] max-sm:h-[25px] bottom-[90px] left-[5%] bg-white opacity-90 rounded-[8px]'>
            <AiOutlineShopping size={14} className='text-black opacity-80 text-3xl max-sm:text-2xl no-underline  font-medium capitalize overflow-hidden whitespace-nowrap text-ellipsis absolute w-full h-full z-2' />
            </div>
            </div>
          
            <h3 className='text-[14px] no-underline lg:text-[18px] font-semibold capitalize text-center py-[4px] overflow-hidden whitespace-nowrap text-ellipsis'>{product.name}</h3>
            <p className='text-[15px] lg:text-[22px]   capitalize w-full text-center overflow-hidden whitespace-nowrap text-ellipsis font-semibold'>NGN {product.price}</p>
            </div>
          </div>
     </Link>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
    </div>
    </div>
  )
}

export default CategoryPage
