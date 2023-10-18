import React from 'react'
import Return from '../../../public/assets/icon/Return'
import Finger from '../../../public/dashboard/icons/Finger'
import Link from 'next/link'
import Ellipse from '../../../public/assets/icon/Ellipse'
import Profile from '../../../public/assets/icon/Profile'

const VoteThanks = () => {
   
  return (
    <section className={`h-screen  w-full bg-[#fafafa]`}>
    <nav className='flex justify-between text-[#000000] bg-[#fff] p-8' >
      <div className='flex gap-2 justify-center items-center'>
          <Finger />
        <h3 className='text-[23.25px] text-[#095494] font-bold'>Doravet</h3>
      </div>
      <div className='flex justify-center items-center gap-5 text-[#000]'>
      <h3 className='text-[16px] text-[#095494]'>View Results</h3>
      <h3 className='text-[16px]'>Support</h3>
      <aside className='flex justify-between items-center gap-3 p-[12px] rounded-lg bg-[#F5F2F6]'>
          <p>Oxbaaf...75cec7</p>
          <Ellipse />
      </aside>
      <Profile/>
       </div>
    </nav>
      <main className="flex flex-col gap-3 py-24">
        <h3 className='text-[24px]  flex justify-center align-center font-[750] text-[#262626] py-2 '> 
       Employee of the year poll</h3>
       <aside className='border-2 inline-flex flex-col justify-center align-center m-auto p-[16px] bg-[#fff]'>
       <h3 className='text-[16px] items-center px-4 text-[#262626] w-[430px] text-center p-2'>Thank you for voting. Result will be available at the end of the polls. </h3>
       
       <Link href={"/wallet/VoteStatistic"} > 
         <div className='flex items-center gap-2 text-[16px] items-center justify-center text-[#095494] '>
            <Return/> <h3 className='text-[16px] text-[#095494]'>Return to Home</h3> </div>
         </Link>
       </aside>
         
        
       
      </main>
   </section> 
  )
}

export default VoteThanks