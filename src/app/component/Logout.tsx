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
            // padding: "6px 12px",
            fontSize: "16px",
            borderRadius: "4px",
            cursor: "pointer",
            
          }}
        className='text-white hover:bg-black/60 hover:text-white bomaaxrder-[1px] border-solid border-[#ccc] max-sm:border-none' onClick={() => handleLogOut()}>
          <AiOutlineLogout  className='text-[28px] mr-[8px] max-sm:mr-[0px]'/>
         {/* <p  className='max-sm:text-[15px] max-sm:hidden'></p> */}
        </button>
    </div>
  )
}

export default Logout
