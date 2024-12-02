'use client'
import Image from 'next/image';
import Link from 'next/link';
import assets from '@/assets/asset';
import { useState } from 'react';
import { z } from "zod"
 import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import WelcomeModal from './WelcomeModal';
import { signIn, signUp } from '../lib/action/user.server';
 


export default  function Authform({type}:{type: string}) {
  const router = useRouter()
  const formSchema = z.object({
    // sign up 
    firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    address1: type === 'sign-in' ? z.string().optional() : z.string().max(50).min(5),
    city: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    state: type === 'sign-in' ? z.string().optional() : z.string().max(5).min(2),
    dob: type === 'sign-in' ? z.string().optional() : z.string().min(3),
 // sign in 
 email: z.string().email(),
 password: z.string()
 .min(8, { message: "Password must be at least 8 characters long." })
 .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
 .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
 .regex(/\d/, { message: "Password must contain at least one number." })
})

   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
       // sign up 
       firstName: "",
       lastName: "",
       address1: "",
        city: "",
       state: "",
       dob: "",

      //  sign in 
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true)

    try {
        if(type === 'sign-up'){
          const newUser = await signUp(data)
          setUser(newUser)
          toast.success('Account created successfully', {
            duration: 3000,
          })
        }else {
          const res = await signIn({
            email: data.email,
            password: data.password
          })
  
          if (res) router.push('/component/Home')
            toast.success('Sign in successful')
        }
    }catch (error) {
      console.log(error)
    }finally {
      setIsLoading(false)
    }
    console.log(data)
    setIsLoading(false)
  }

  
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div
    className=" relative flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center bg-no-repeat bg-[url('https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Shop+With+Style')] max-sm:mt-14"
  >
    <div className="w-full  lg:w-[40%] flex items-center px-8 lg:px-10 bg-white shadow-md rounded-lg p-6 max-sm:px-4">
      <div className="w-full max-w-[100%]">
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6 text-center">
          {user ? (
            <WelcomeModal />
          ) : type === "sign-in" ? (
            " Welcome Back! 😃"
          ) : (
            " Create an account to get started."
          )}
        </h2>
        <p className="text-gray-600 mb-1 text-center">
          {type === 'sign-in' ? 'Log in to continue exploring your favorite products.' : ''}
        </p>
  
        {/* Conditional Form / Welcome Message */}
        {user ? (
          <p className="text-center text-xl font-semibold text-gray-700">
            Welcome Michael
          </p>
        ) : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Sign-Up Fields */}
                {type === "sign-up" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <CustomInput
                        id="firstName"
                        form={form.control}
                        name="firstName"
                        placeHolder="Enter your first name"
                        label="First Name"
                      />
                      <CustomInput
                        id="lastName"
                        form={form.control}
                        name="lastName"
                        placeHolder="Enter your last name"
                        label="Last Name"
                      />
                    </div>
                    <CustomInput
                      id="address1"
                      form={form.control}
                      name="address1"
                      placeHolder="Enter your specific address"
                      label="Address"
                    />
                    <CustomInput
                      id="city"
                      form={form.control}
                      name="city"
                      placeHolder="Enter your city"
                      label="City"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <CustomInput
                        id="state"
                        form={form.control}
                        name="state"
                        placeHolder="State (e.g., NY)"
                        label="State"
                      />
                      <CustomInput
                        id="dob"
                        form={form.control}
                        name="dob"
                        placeHolder="YYYY-MM-DD"
                        label="Date of Birth"
                      />
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4">
                      <CustomInput
                        id="dob"
                        form={form.control}
                        name="dob"
                        placeHolder="YYYY-MM-DD"
                        label="Date of Birth"
                      />
                      <CustomInput
                        id="ssn"
                        form={form.control}
                        name="ssn"
                        placeHolder="Last 4 Digits"
                        label="SSN"
                      />
                    </div> */}
                  </>
                )}
  
                {/* Common Fields */}
                <CustomInput
                  id="email"
                  form={form}
                  name="email"
                  placeHolder="Enter your email"
                  label="Email"
                />
                <CustomInput
                  id="password"
                  form={form}
                  name="password"
                  placeHolder="Enter your password"
                  label="Password"
                />
  
                {/* Submit Button */}
                <div className="flex flex-col gap-4">
                  <Button
                    type="submit"
                    className="bg-black hover:bg-black/90 text-white px-4 py-6 rounded-md w-full flex justify-center items-center mt-4 text-[17px]"
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
        <p className="mt-6 text-center text-[17px] text-gray-600">
          {type === "sign-in" ? (
            <>
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-black hover:underline text-[16px]">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/sign-in" className="text-black hover:underline text-[16px]">
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