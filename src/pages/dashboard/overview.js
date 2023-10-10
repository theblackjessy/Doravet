import DashboardLayout from '@/components/dashboard/layout/layout'
import Button from '@/components/form/Button'
import React, { useState } from 'react'
import AddPoll from '../../../public/dashboard/overview/addPoll'
import CreatePoll from '@/components/dashboard/overview/createPoll'
import PollForm from '@/components/dashboard/overview/pollForm'


const pollData = [

]

const Dashboard = () => {
  const [polls, setPolls] = useState(pollData);
  const [createPoll, setCreatePoll] = useState(false)

  const handleCreatePoll = () => {
    console.log("flip switched")
    setCreatePoll(prev => !prev)
  }
  return (
    <section className='w-full h-screen overflow-y-scroll'>
      {
        !createPoll ? (
          <aside>
            {polls.length < 1 ? (<CreatePoll createPoll={handleCreatePoll} />) : (<aside>start creating poll </aside>)}
          </aside>
        ) : (
          <PollForm />
        )
      }
    </section>
  )
}


Dashboard.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <Dashboard>{page}</Dashboard>
    </DashboardLayout>
  )
}
export default Dashboard


// body::-webkit-scrollbar{
//   display: none;
// }