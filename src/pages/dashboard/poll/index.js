
import { pollData } from '@/components/DummyData';
import DashboardLayout from '@/components/dashboard/layout/layout';
import PollDisplay from '@/components/dashboard/poll/PollDisplay';
import PollStats from '@/components/dashboard/poll/pollStatistics';
import React, { useState } from 'react'


const Poll = ({ children }) => {
  const [polls, setPolls] = useState(pollData);

  return (
    <div className='w-full h-screen overflow-y-scroll'>
      {
        polls.length > 0 && (
          <PollStats />
        )
      }

      {children ? children : <PollDisplay data={polls} />}
    </div>
  )
}


export default Poll

Poll.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <Poll />
    </DashboardLayout>
  )
}