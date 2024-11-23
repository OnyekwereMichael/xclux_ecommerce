import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import CartProvider from "./component/Providers";
import ShoppingCartModal from "./component/ShoppingCartModal";
import { Toaster } from "react-hot-toast";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Xclux",
  description: "Xclux Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Toaster />
            <Navbar />
            <ShoppingCartModal />
            <div className="mt-14 max-sm:mt-18">
            {children}
            </div>
            <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
