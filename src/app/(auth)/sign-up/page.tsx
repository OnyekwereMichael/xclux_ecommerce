import { getLoggedInUser } from "@/app/lib/action/user.server";
import Authform from "../../component/Authform"

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  
  if (typeof window !== 'undefined') {
    if (!loggedInUser) {
      window.location.href = 'sign-up';
    }
  }
  return (
    <div>
       <section className='signIn'>
           <Authform type ='sign-up'/>
       </section>
    </div>
  )
}

export default SignUp
