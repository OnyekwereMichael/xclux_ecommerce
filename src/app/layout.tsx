import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import CartProvider from "./component/Providers";
import ShoppingCartModal from "./component/ShoppingCartModal";
import { Toaster } from "react-hot-toast";
import { getLoggedInUser } from "./lib/action/user.server";






// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Xclux",
  description: "Xclux Ecommerce",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser()
  // if(!loggedIn) redirect('/sign-in')
  return (
    <html lang="en">
      <body
      >
        <CartProvider>
          <Toaster />
          

            <Navbar user={loggedIn ?? undefined} />
            <ShoppingCartModal />
            <div className=" max-sm:mt-18">
            {children}
            </div>
            <Footer />
        </CartProvider>
      </body>
    </html>
  );

}