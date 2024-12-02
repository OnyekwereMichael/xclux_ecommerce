import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { logoutAccount } from '../lib/action/user.server'
import { redirect, useRouter } from 'next/navigation'

const Logout = () => {
  const router = useRouter()
  const handleLogOut = async () => {
   const loggedOut = await logoutAccount();
  if(loggedOut){
    redirect('/sign-in')
  } 
  }
  return (
    <div>
           <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        className='text-white hover:bg-black/60 hover:text-white' onClick={() => handleLogOut()}>
          <AiOutlineLogout style={{ marginRight: "8px" }} />
          Logout
        </button>
    </div>
  )
}

export default Logout
