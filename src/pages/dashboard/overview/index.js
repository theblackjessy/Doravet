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
import PollStats from '@/components/dashboard/overview/pollStatistics'



const Dashboard = ({ children }) => {
  const [polls, setPolls] = useState([]);
  const [createPoll, setCreatePoll] = useState(false)

  const handleCreatePoll = () => {
    console.log("flip switched")
    setCreatePoll(prev => !prev)
  }
  return (
    <section className='w-full h-screen overflow-y-scroll'>
      {
        polls.length > 0 && (
          <PollStats />
        )
      }
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