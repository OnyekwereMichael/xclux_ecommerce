import Authform from "../../component/Authform"

const SignUp = async () => {
  return (
    <div>
       <section className='signIn'>
           <Authform type ='sign-up'/>
           <p>Sign In</p>
       </section>
    </div>
  )
}

export default SignUp
