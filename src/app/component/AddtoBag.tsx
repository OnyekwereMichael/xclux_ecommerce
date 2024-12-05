'use client'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/client'
import toast from 'react-hot-toast'



export interface  ProductCart {
    name: string,
    price: number,
    details: string,
    image: string,
    currency: string,
    price_id: string,
}
const AddtoBag = ({currency, price, details, image, name, price_id}:ProductCart) => {
    console.log(urlFor(image).url());
    const Product = {
      name: name,
      details: details,
      price: price,
      currency: currency,
      image: urlFor(image).url(), 
      price_id: price_id
    }
    const { addItem, handleCartClick,  } = useShoppingCart()
    return (
        <div>
            <button type="button" className="add-to-cart"
             onClick={() => {
                addItem(Product)
                console.log('Product added to cart:', Product);
                toast.success(`${name} added to cart!`, {
                    position: 'top-center',
                    duration: 3000,
                    icon: '🛒',
                });
                // to open the cart 
                handleCartClick()
             }}>
                Add to Bag
            </button>
        </div>
    )
}

export default AddtoBag
