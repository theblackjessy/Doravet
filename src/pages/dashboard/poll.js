import DashboardLayout from '@/components/dashboard/layout/layout'
import PollStats from '@/components/dashboard/poll/pollStatistics'
import React, { useState } from 'react'
import { pollData } from '@/components/DummyData'
import PollDisplay from '@/components/dashboard/poll/PollDisplay'

const Poll = () => {
  const [polls, setPolls] = useState(pollData);

  return (
    <div className='w-full h-screen overflow-y-scroll'>
      {
        polls.length > 0 && (
          <PollStats />
        )
      }

      <PollDisplay data={polls} />
    </div>
  )
}


export default Poll

Poll.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}