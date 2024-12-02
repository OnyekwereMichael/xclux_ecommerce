import React, { useEffect, useState } from "react";
import { getLoggedInUser } from "../lib/action/user.server";
import Link from "next/link";
const WelcomeModal = () => {
  const [loggedInUser, setLoggedInUser] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  console.log("Logged in user:", loggedInUser);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
  <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100 max-sm:mx-3">
    <div className="p-8">
      <h2 className="text-3xl font-extrabold text-center text-black mb-6 tracking-wide">
        Welcome 🎉
      </h2>
      <p className="text-center text-gray-700 mb-8 leading-relaxed text-[16px]">
        {loggedInUser
          ? `Hi "${loggedInUser.name.toUpperCase()}" , we're thrilled to have you here! Explore our exceptional products and find the best deals tailored just for you.`
          : "We're delighted to have you here! Discover our amazing products and enjoy exclusive deals crafted for you."}
      </p>
      <div className="flex justify-center">
        <Link
          href="/sign-in"
          className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out shadow-lg text-[16px]"
        >
          Continue to Sign In
        </Link>
      </div>
    </div>
    <div className="border-t border-gray-300 py-4 text-center">
      <p className="text-sm text-gray-500">
        By continuing, you agree to our{" "}
        <Link href="/TermsandConditon" target="_blank" className="text-black font-medium underline hover:no-underline">
          Terms & Conditions
        </Link>
        .
      </p>
    </div>
  </div>
</div>
  );
};
export default WelcomeModal;
