'use client'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/client'
import { ProductCart } from './AddtoBag'


const Checkout = ({currency, price, details, image, name, price_id}:ProductCart) => {
    console.log(urlFor(image).url());
    
    function buyNow(price_id:string) {
        checkoutSingleItem(price_id)
    }
    const Product = {
      name: name,
      details: details,
      price: price,
      currency: currency,
      image: urlFor(image).url(),
      price_id: price_id
    }
    const { checkoutSingleItem } = useShoppingCart()
    return (
        <div>
            <button type="button" className="add-to-cart"
             onClick={() => {
               buyNow(Product.price_id)
             }}>
                Add to Cart
            </button>
        </div>
    )
}

export default Checkout
