import DashboardLayout from '@/components/dashboard/layout/layout'
import Button from '@/components/form/Button'
import React, { useState } from 'react'
import AddPoll from '../../../../public/dashboard/overview/addPoll'
import CreatePoll from '@/components/dashboard/overview/createPoll'
import PollForm from '@/components/dashboard/overview/pollForm'
import PollDisplay from '@/components/dashboard/overview/PollDisplay'
import DateIcon from '../../../../public/dashboard/icons/DateIcon'
import PollQuestion from '../../../../public/dashboard/icons/PollQuestion'
import PollOption from '../../../../public/dashboard/icons/PollOption'
import PollVoters from '../../../../public/dashboard/icons/PollVoters'
import { pollData } from '@/components/DummyData'



const Dashboard = ({ children }) => {
  const [polls, setPolls] = useState(pollData);
  const [createPoll, setCreatePoll] = useState(false)

  const handleCreatePoll = () => {
    console.log("flip switched")
    setCreatePoll(prev => !prev)
  }
  return (
    <section className='w-full h-screen overflow-y-scroll'>
      <aside className='flex my-12 gap-6 items-center' >
        <div className='border-[#095494] border rounded-[10px] p-[20px] text-[#095494] w-[300px] bg-[#F0F8FF] flex gap-3'>
          <div className='py-5'> <PollQuestion /></div>
          <div className='flex flex-col '>
            <h3 className='font-bold text-[32px]' >3</h3>
            <h3 className='text-[16px]'>Poll questions</h3>
          </div>
        </div>
        <div className='border-[#CE6300] border rounded-[10px] p-[20px] text-[#CE6300] w-[300px] bg-[#FFF8F2] flex gap-3 capitalize'>
          <div className='py-5'> <PollOption /></div>
          <div className='flex flex-col '>
            <h3 className='font-bold text-[32px]' >12</h3>
            <h3 className='text-[16px]'>Poll options</h3>
          </div>
        </div>
        <div className='border-[#026C1A] border rounded-[10px] p-[20px] text-[#026C1A] w-[300px] bg-[#F4FFF7] flex gap-3 capitalize'>
          <div className='py-5'> <PollVoters /></div>
          <div className='flex flex-col '>
            <h3 className='font-bold text-[32px]' >12</h3>
            <h3 className='text-[16px]'>Poll options</h3>
          </div>
        </div>
      </aside>
      {
        !createPoll ? (
          polls.length < 1 ? (<CreatePoll createPoll={handleCreatePoll} />) : (children ? children : <PollDisplay data={polls} />)
        ) : (
          <PollForm />
        )
      }
    </section>
  )
}


Dashboard.getLayout = function getLayout() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  )
}
export default Dashboard


// body::-webkit-scrollbar{
//   display: none;
// }