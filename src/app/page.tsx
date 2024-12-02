import SignUp from "./(auth)/sign-up/page";
import HeroBanner from "./component/Home/HeroBanner";
import Product from "./component/Home/Product";

export default function Home() {
  return (
   <div>
     {/* <HeroBanner />
     <Product /> */}
     <SignUp />
   </div>
  );
}
