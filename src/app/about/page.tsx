"use client";

import { FaStar, FaHandsHelping, FaTruck } from "react-icons/fa";
import React from "react";
import assets from "@/assets/asset";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const team = [
    {
      name: "John Doe",
      img: assets.john,
      id: "1",
      position: "Ceo & Founder",
    },
    {
      name: "Jane Johnson",
      img: assets.jane,
      id: "2",
      position: "Product Manager",
    },
    {
      name: "Kelvin Smith",
      img: assets.kelvin,
      id: "3",
      position: "Managing Director",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 mt-14 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-black/90 text-white py-16 px-6 max-sm:px-3 max-sm:py-7">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold">Discover Our Story 😊</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We&apos;re on a mission to redefine your shopping experience and set new
            standards in the industry.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black/90">
            Our Vision and Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-black/90">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-700">
                To become the go-to e-commerce platform for quality and
                innovation, offering products that enhance your life.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-black/90">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-700">
                To connect customers with the best products, deliver exceptional
                service, and foster a community of trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 ">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black/90">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white shadow-lg p-6 rounded-lg transition hover:shadow-xl">
              <FaStar size={40} className="mx-auto text-black" />
              <h3 className="text-xl font-semibold mt-6 text-black/90">Quality Products</h3>
              <p className="mt-4 text-gray-700">
                We only offer carefully curated and premium quality products.
              </p>
            </div>
            <div className="text-center bg-white shadow-lg p-6 rounded-lg transition hover:shadow-xl">
              <FaHandsHelping size={40} className="mx-auto text-black" />
              <h3 className="text-xl font-semibold mt-6 text-black/90">
                Exceptional Support
              </h3>
              <p className="mt-4 text-gray-700">
                Our team is here to assist you 24/7 with any queries or
                concerns.
              </p>
            </div>
            <div className="text-center bg-white shadow-lg p-6 rounded-lg transition hover:shadow-xl">
              <FaTruck size={40} className="mx-auto text-black" />
              <h3 className="text-xl font-semibold mt-6 text-black/90">Fast Delivery</h3>
              <p className="mt-4 text-gray-700">
                Quick and reliable delivery ensures you get your products on
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-4xl font-extrabold text-center mb-10 text-black/90">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="h-48 w-full relative flex items-center justify-center bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                {/* Content Section */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-black/90 mb-[20px] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to shop with us?
          </h2>
          <p className="mt-6 text-lg">
            Experience the best in online shopping today.
          </p>
          <button className="mt-8 bg-white text-black px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            <Link href="/">Start Shopping</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
