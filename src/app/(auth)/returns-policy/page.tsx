import Link from 'next/link'
import React from 'react'

const Returnpolicy = () => {
  return (
    <div className="min-h-[10vw] w-[98.5vw] bg-gray-50 py-12 px-6 flex justify-center  mt-14 max-sm:px-2 max-sm:mt-7 max-sm:w-[100vw]">
<div className='border-solid border-[3px] border-black'>
  <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
    <h1 className="text-2xl font-bold text-gray-900 text-center mb-6 max-sm:text-3xl">
      Return Policy ✔
    </h1>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      We want you to love your purchase! If you're not completely satisfied, you can return your item(s) within <span className="font-semibold text-gray-900">30 days</span> of receiving your order.
    </p>

    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Eligibility</h2>
        <p className="text-gray-600 leading-relaxed">
          To be eligible for a return, the item must be unused, in its original packaging, and accompanied by a receipt or proof of purchase.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Non-Returnable Items</h2>
        <p className="text-gray-600 leading-relaxed">
          Certain items such as perishable goods, custom products, and gift cards are not eligible for returns. Please review the product description for specific details.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Refund Process</h2>
        <p className="text-gray-600 leading-relaxed">
          Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed back to your original payment method within <span className="font-semibold">5-7 business days</span>.
        </p>
      </section>
    </div>

    <div className="mt-8 text-center">
      <Link
        href="/home"
        className="inline-block bg-gray-900 text-white py-3 px-10 rounded-full shadow-md hover:bg-gray-800 transition duration-300 text-lg"
      >
        Back to Home
      </Link>
    </div>
  </div>
  </div>
</div>
  )
}

export default Returnpolicy
