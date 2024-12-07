'use client'
import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_2a3nvfj",
          "template_2pf78fg",
          form.current,
          { publicKey: "O-r2QUaEJRNUXmAWv" }
        );
        toast.success("Message Sent", {
          duration: 5000,
        });
      } catch (error) {
        console.error("FAILED...", error);
        toast.error("Failed to send message.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white min-h-screen mt-14 mb-[44px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-black/90 text-white py-16 px-6 max-sm:px-3 max-sm:py-7">
        <div className="container mx-auto text-center">
          <h1 className="text-[25px] md:text-5xl font-bold mb-4">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-lg md:max-w-3xl mx-auto">
            Reach out to us with your questions, feedback, or inquiries. We’re
            here to help and will get back to you as soon as possible!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-sm:px-4">
        {/* Contact Information */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-lg border-solid border-[4px] border-black">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-8">
            You can reach us using the contact information below:
          </p>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
              <FaPhoneAlt className="text-black/70 text-2xl mr-4" />
              <div>
                <h3 className="font-medium text-lg text-gray-800">Phone</h3>
                <p className="text-gray-700">+234 813 151 0808</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
              <FaEnvelope className="text-black/70 text-2xl mr-4" />
              <div>
                <h3 className="font-medium text-lg text-gray-800">Email</h3>
                <p className="text-gray-700">onyekweremichael55@gmail.com</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
              <FaMapMarkerAlt className="text-black/80 text-2xl mr-4" />
              <div>
                <h3 className="font-medium text-lg text-gray-800">
                  Office Address
                </h3>
                <p className="text-gray-700">
                  1234 E-commerce St, Online City, World
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-solid border-[4px] border-black">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Write to Us
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="user_name"
                className="block text-[16px] font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                name="to_name"
                id="user_name"
                placeholder="Enter your name"
                className="w-full mt-1 px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/70"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block text-[16px] font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="from_name"
                id="user_email"
                placeholder="Enter your email"
                className="w-full mt-1 px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/70"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[16px] font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Write your message"
                className="w-full mt-1 px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/70"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white text-[17px] py-3 rounded-md hover:bg-black/90 transition duration-300 cursor-pointer flex justify-center items-center"
            >
              {loading ? <Loader className="animate-spin" /> : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Find Us Here
        </h2>
        <div className="w-full h-96 bg-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509497!2d144.9537353153175!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8d0f833d91b!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1619157239179!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
