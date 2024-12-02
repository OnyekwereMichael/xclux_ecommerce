'use client';

import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { client } from '../../lib/client';
import Product from '../../component/Home/Product';
import { Loader2 } from 'lucide-react';
import AddtoBag from '../../component/AddtoBag';
import Image from 'next/image';
import Checkout from '@/app/component/CheckoutNow';

interface ProductData {
  _id: string;
  name: string;
  price: number;
  slug: string;
  details: string;
  images: string[];
  price_id: string;
}

interface ProductDetailsProps {
  params: { slug: string };
}

const Productdetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const [productDetail, setProductDetail] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  // Fetch product data
  const getData = async (slug: string) => {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
      _id,
      name,
      price,
      "slug": slug.current,
      "details": details,
      "images": image[].asset->url,
      price_id
    }`;
    const data: ProductData | null = await client.fetch(query);
    return data || null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(params.slug);
        setProductDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] text-center">
        <Loader2 size={40} className="animate-spin" />
      </div>
    );
  }

  if (isError || !productDetail) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className='mt-14 mb-[44px]'>
      <div className="product-detail-container">
        <div>
          <div className="product-detail-image hover:transition-all hover:duration-500">
            <Image
              src={productDetail.images[index]}
              alt={productDetail.name}
              className="main-product-image"
              width={500}
              height={500}
            />
          </div>

          <div className="small-images-container">
            {productDetail.images.map((image, i) => (
              <div key={i}>
                <Image
                  className="selected-image"
                  src={image}
                  alt={`Thumbnail ${i}`}
                  width={70}
                  height={70}
                  onClick={() => setIndex(i)}
                  style={{
                    cursor: 'pointer',
                    border: index === i ? '4px solid #000' : 'none',
                    borderRadius: '10px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{productDetail.name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{productDetail.details}</p>
          <p className="price">NGN {productDetail.price}</p>

          <div className="quantity my-2 max-sm:my-[2px]">
            <h4>Quantity:</h4>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">1</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="buttons">
            <AddtoBag
              currency="USD"
              details={productDetail.details}
              price={productDetail.price}
              name={productDetail.name}
              image={productDetail.images[0]}
              key={productDetail._id}
              price_id={productDetail.price_id}
            />
            <Checkout 
                 currency="USD"
                 details={productDetail.details}
                 price={productDetail.price}
                 name={productDetail.name}
                 image={productDetail.images[0]}
                 key={productDetail._id}
                 price_id={productDetail.price_id}
            />
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track mt-10">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
