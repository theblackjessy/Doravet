import React from 'react'
import Finger from '../../../public/dashboard/icons/Finger'
import Button from '../form/Button'
import Link from 'next/link'

const WalletDisplay = ({createWallet}) => {
  return (
    <section className={`h-screen  w-full bg-[#fafafa]`}>
    <nav className='flex justify-between text-[#000000] bg-[#fff] p-6' >
        <div className='flex gap-2 justify-center items-center'>
           <Finger />
          <h3 className='text-[23.25px] text-[#095494] font-bold'>Doravet</h3>
        </div>
        <div className='flex justify-center items-center gap-5'>
        <h3 className='text-[16px]'>Support</h3>
        
         <Button text={"Connect Wallet"} />
         </div>
      </nav>
      <main className="flex flex-col gap-3 py-24">
        <h3 className='text-[24px]  flex justify-center align-center font-[750] text-[#262626] '> 
        Welcome to the <span className='uppercase inline-block px-2'>Employee of the year</span> poll</h3>
        <p className='text-[16px] text-[#4F4F4F] flex justify-center align-center'>Connect your wallet to get started</p>
        <div className='flex justify-center align-center'>
         <Button text={"Connect Wallet"} handleClick={createWallet} />
       </div>
      </main>
   </section> 
  )
}

export default WalletDisplay