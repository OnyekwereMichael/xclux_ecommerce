// 'use client'
// import React from 'react'
// import { useShoppingCart } from 'use-shopping-cart'
// import { urlFor } from '../lib/client'
// import { ProductCart } from './AddtoBag'
// import { AiOutlineShopping } from 'react-icons/ai'


// const AddtoBagIcon = ({currency, price, details, image, name, price_id}:ProductCart) => {
//     console.log(urlFor(image).url());
    
//     const Product = {
//       name: name,
//       details: details,
//       price: price,
//       currency: currency,
//       image: urlFor(image).url(),
//       price_id: price_id
//     }
//     const { addItem, handleCartClick } = useShoppingCart()
//     return (
//         <div>
//             <AiOutlineShopping size={14} className='text-black opacity-80 text-3xl max-sm:text-2xl no-underline  font-medium capitalize overflow-hidden whitespace-nowrap text-ellipsis absolute w-full h-full z-2' onClick={() => {
//                 addItem(Product)
//                 // to open the cart 
//                 handleCartClick()
//              }}/>
//             </div>
//     )
// }

// export default AddtoBagIcon
