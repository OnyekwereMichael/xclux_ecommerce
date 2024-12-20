'use client';
import Link from 'next/link';
import { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';
// import { useRouter } from 'next/navigation';
import WelcomeModal from './WelcomeModal';
import { signIn, signUp } from '../lib/action/user.server';
import { authFormSchema } from '@/lib/utils';

export default function Authform({ type }: { type: string }) {
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      if (type === 'sign-up') {
        const newUser = await signUp(data);
        setUser(newUser);
        toast.success('Account created successfully', { duration: 3000 });
      } else {
        const res = await signIn({ email: data.email, password: data.password });
        if (res) window.location.href = '/home';
        toast.success('Sign in successful');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
  className="relative flex flex-col items-center justify-center w-screen h-screen  bg-cover bg-center bg-no-repeat bg-[url('https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Shop+With+Style')] overflow-hidden max-sm:h-[85vh]"
>
<h2 className='text-white text-2xl my-2'>Welcome to Xclux</h2>
  <div className="w-full lg:w-[40%] md:w-[80%] flex items-center px-8 lg:px-10 bg-white shadow-md rounded-lg p-6 max-sm:px-4 max-sm:rounded-none max-sm:shadow-none max-sm:h-screen max-sm:overflow-y-auto">
    <div className="w-full max-w-[100%]">
      {/* Title */}
      <h2 className="text-[30px] lg:text-3xl font-bold text-black mb-3 max-sm:mb-3 text-center max-sm:text-3xl max-sm:leading-tight ">
        {user ? (
          <WelcomeModal />
        ) : type === "sign-in" ? (
          " Welcome Back! 😃"
        ) : (
          "Create an account ✔"
        )}
      </h2>
      <p className="text-gray-600 mb-6 text-center max-sm:text-sm max-sm:mb-4">
        {type === 'sign-in'
          ? 'Log in to continue exploring your favorite products.'
          : ' Join us today and explore new possibilities! ✔'}
      </p>

      {/* Conditional Form / Welcome Message */}
      {user ? (
        <p className="text-center text-xl font-semibold text-gray-700 max-sm:text-lg">
          Welcome Michael
        </p>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 max-sm:space-y-6 max-sm:mt-6"
            >
              {/* Sign-Up Fields */}
              {type === "sign-up" && (
                <>
                  <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      placeHolder="Enter your first name"
                      label="First Name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      placeHolder="Enter your last name"
                      label="Last Name"
                    />
                  </div>
                  {/* <CustomInput
                    control={form.control}
                    name="address1"
                    placeHolder="Enter your specific address"
                    label="Address"
                  /> */}
                  {/* <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    <CustomInput
                      control={form.control}
                      name="state"
                      placeHolder="State (e.g., NY)"
                      label="State"
                    />
                    <CustomInput
                      control={form.control}
                      name="dob"
                      placeHolder="YYYY-MM-DD"
                      label="Date of Birth"
                    />
                  </div> */}
                </>
              )}

              {/* Common Fields */}
              <CustomInput
                control={form.control}
                name="email"
                placeHolder="Enter your email"
                label="Email"
              />
              <CustomInput
                control={form.control}
                name="password"
                placeHolder="Enter your password"
                label="Password"
              />

              {/* Submit Button */}
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="bg-black hover:bg-black/90 text-white px-4 py-6 rounded-md w-full flex justify-center items-center mt-4 text-[17px] max-sm:text-[15px] max-sm:py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}

      {/* Footer */}
      <p className="mt-6 text-center text-[17px] text-gray-600 max-sm:text-[16px] max-sm:mt-8">
        {type === "sign-in" ? (
          <>
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-black hover:underline max-sm:text-[15px]">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-black hover:underline max-sm:text-[15px]">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  </div>
</div>
  );
}
