import { getLoggedInUser } from "@/app/lib/action/user.server";
import Authform from "../../component/Authform"
import { redirect } from "next/navigation";

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  
  if (!loggedInUser) redirect("/signup");
  return (
    <div>
       <section className='signIn'>
           <Authform type ='sign-up'/>
           {/* <p>Sign In</p> */}
       </section>
    </div>
  )
}

export default SignUp
