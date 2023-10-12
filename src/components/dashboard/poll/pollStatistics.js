import React from 'react'
import PollQuestion from '../../../../public/dashboard/icons/PollQuestion'
import PollOption from '../../../../public/dashboard/icons/PollOption'
import PollVoters from '../../../../public/dashboard/icons/PollVoters'

const PollStats = () => {
  return (
    <aside className='md:flex my-12 gap-6 items-center' >
      <div className='border-[#095494] border rounded-[10px] p-[20px] text-[#095494] my-6 md:my-0 md:w-[300px] bg-[#F0F8FF] flex gap-3'>
        <div className='py-5'> <PollQuestion /></div>
        <div className='flex flex-col '>
          <h3 className='font-bold text-[32px]' >3</h3>
          <h3 className='text-[16px]'>Poll questions</h3>
        </div>
      </div>
      <div className='border-[#CE6300] border rounded-[10px] p-[20px] text-[#CE6300] my-6 md:my-0 md:w-[300px] bg-[#FFF8F2] flex gap-3 capitalize'>
        <div className='py-5'> <PollOption /></div>
        <div className='flex flex-col '>
          <h3 className='font-bold text-[32px]' >12</h3>
          <h3 className='text-[16px]'>Poll options</h3>
        </div>
      </div>
      <div className='border-[#026C1A] border rounded-[10px] p-[20px] text-[#026C1A] my-6 md:my-0 md:w-[300px] bg-[#F4FFF7] flex gap-3 capitalize'>
        <div className='py-5'> <PollVoters /></div>
        <div className='flex flex-col '>
          <h3 className='font-bold text-[32px]' >12</h3>
          <h3 className='text-[16px]'>Poll options</h3>
        </div>
      </div>
    </aside>
  )
}

export default PollStats