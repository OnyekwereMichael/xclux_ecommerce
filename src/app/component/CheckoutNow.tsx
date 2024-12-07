'use client'
import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/client'
import { ProductCart } from './AddtoBag'
import { Loader2 } from 'lucide-react'

const Checkout = ({ currency, price, details, image, name, price_id }: ProductCart) => {
  const [isLoading, setIsLoading] = useState(false) // Manage loading state
  const { checkoutSingleItem } = useShoppingCart()

  const Product = {
    name: name,
    details: details,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  }

  async function buyNow(price_id: string) {
    setIsLoading(true) // Start spinner
    try {
      await checkoutSingleItem(price_id) // Wait for checkout to complete
    } catch (error) {
      console.error('Error during checkout:', error)
    } finally {
      setIsLoading(false) // Stop spinner
    }
  }

  return (
    <div>
      <button
        type="button"
        className={`buy-now flex items-center justify-center gap-2 ${isLoading ? 'opacity-70' : ''}`}
        onClick={() => buyNow(Product.price_id)}
        disabled={isLoading} 
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" /> {/* Spinner icon */}
            Processing...
          </>
        ) : (
          'Buy Now'
        )}
      </button>
    </div>
  )
}

export default Checkout
