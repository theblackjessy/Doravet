import DashboardLayout from '@/components/dashboard/layout/layout'
import React, { useState } from 'react'
import CreatePoll from '@/components/dashboard/overview/createPoll'
import PollForm from '@/components/dashboard/overview/pollForm'
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

      {
        !createPoll ? (
          (<CreatePoll createPoll={handleCreatePoll} />)
        ) : (
          <PollForm />
        )
      }
      {/* {
        !createPoll ? (
          polls.length < 1 ? (<CreatePoll createPoll={handleCreatePoll} />) : (children ? children : <PollDisplay data={polls} />)
        ) : (
          <PollForm />
        )
      } */}
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