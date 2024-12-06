import Link from "next/link";

const TermsAndCondition = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-5 px-5 w-[98.5vw] max-sm:px-2 max-sm:py-6 mt-14 relative ">
      <div className="max-w-screen  bg-white shadow-lg rounded-lg p-8 border-[3px] border-solid border-black">
        <h1 className="text-4xl font-bold text-black mb-4 text-center max-sm:text-2xl">
          Terms and Conditions
        </h1>
        <p className="text-gray-700 text-lg mb-10 text-center ">
          Welcome to our e-commerce platform! By accessing or using our website, 
          you agree to be bound by<br className="max-sm:hidden"/> the following terms and conditions. Please read 
          them carefully.
        </p>

        <div className=" grid grid-cols-2 gap-8 max-sm:grid-cols-1">
          <div className="space-y-11 ">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              1. General Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions govern your use of our website and services. 
              By using our platform, you confirm that you are at least 18 years old 
              or have obtained consent from a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              2. Product Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to ensure that all product descriptions, images, and pricing 
              are accurate. However, errors may occur, and we reserve the right to 
              correct any inaccuracies or omissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              3. Payment and Billing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Payments must be made using the payment methods provided at checkout. 
              By providing your payment information, you agree to pay for the items 
              purchased, including applicable taxes and shipping fees.
            </p>
          </section>
          </div>

        <div className=" space-y-11 ">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              4. Returns and Refunds
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you are not satisfied with your purchase, you may be eligible for a 
              return or refund in accordance with our <Link href="/returns-policy">
                <Link href='/returns-policy' className="text-blue-600 hover:underline">Returns Policy</Link>
              </Link>. Please review the policy for detailed instructions, and follow all directions as it it. Thanks for co-operating
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for any indirect, incidental, or consequential damages 
              arising from the use of our services or the inability to use them, including 
              but not limited to loss of profits, data, or goodwill.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-3">
              6. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these Terms and Conditions at any time. 
              Changes will be posted on this page, and it is your responsibility to review 
              them periodically.
            </p>
          </section>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/home">
            <Link href='/home' className="inline-block bg-black text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 text-lg">
              Back to Home
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
