import Image from 'next/image';
import Link from 'next/link';
import assets from '@/assets/asset';

export default function Authform() {
  return (
    <div className="h-screen w-[98vw] flex overflow-hidden">
      {/* Left Section (Image) */}
      <div className="flex-shrink-0 w-1/2 relative max-sm:hidden">
        <Image
          src={assets.authimg}
          alt="E-commerce Signup"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* Right Section (Sign-Up Form) */}
      <div className="px-3 pl-6 flex-shrink-0 w-1/2 flex flex-col justify-center items-center bg-white max-sm:w-[100%] max-sm:px-3">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Join our e-commerce platform and enjoy exclusive benefits.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-black/80"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-black/80"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:border-black/80"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black hover:bg-black/80 text-white font-medium py-3 rounded-lg shadow-lg transition-all"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-[16px] text-gray-600 text-center">
            Already have an account?{' '}
            <Link href="/login">
              <button className="text-black hover:underline">Log In</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
