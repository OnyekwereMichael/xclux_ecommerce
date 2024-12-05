import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { logoutAccount } from '../lib/action/user.server'
// import { redirect } from 'next/navigation'

const Logout = () => {
  const handleLogOut = async () => {
    await logoutAccount();
    // redirect('/sign-in');
    window.location.href = '/sign-in';
  }
  return (
    <div>
           <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "6px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        className='text-white hover:bg-black/60 hover:text-white' onClick={() => handleLogOut()}>
          <AiOutlineLogout style={{ marginRight: "8px" }} />
         <p>Logout</p>
        </button>
    </div>
  )
}

export default Logout
