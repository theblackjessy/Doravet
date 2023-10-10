import DashboardLayout from '@/components/dashboard/layout/layout'
import Button from '@/components/form/Button'
import React, { useState } from 'react'
import AddPoll from '../../../../public/dashboard/overview/addPoll'
import CreatePoll from '@/components/dashboard/overview/createPoll'
import PollForm from '@/components/dashboard/overview/pollForm'
import PollDisplay from '@/components/dashboard/overview/PollDisplay'
import DateIcon from '../../../../public/dashboard/icons/DateIcon'


const pollData = [
  {
    id: 1,
    title: "Employee of the week",
    desc: "The poll description goes here. You can type as many details as possible. Feel free. Knock yourself out. There is enough room for you. Okay! This should do!",
    status: 0,
    start: 'August 2, 2023 12:00pm',
    end: 'August 2, 2023 12:00pm',
    icon: <DateIcon />,
    candidates: [
      {
        name: 'Highdan Varim',
        votes: 20
      },
      {
        name: 'Oshuporu',
        votes: 20
      }
    ],
    totalVotes: 33,
    voters: 33
  },
  {
    id: 2,
    title: "Employee of the week",
    desc: "The poll description goes here. You can type as many details as possible. Feel free. Knock yourself out. There is enough room for you. Okay! This should do!",
    status: 1,
    start: 'August 2, 2023 12:00pm',
    end: 'August 2, 2023 12:00pm',
    icon: <DateIcon />,

  },
  {
    id: 3,
    title: "Employee of the week",
    desc: "The poll description goes here. You can type as many details as possible. Feel free. Knock yourself out. There is enough room for you. Okay! This should do!",
    status: 2,
    start: 'August 2, 2023 12:00pm',
    end: 'August 2, 2023 12:00pm',
    icon: <DateIcon />,
    candidates: [
      {
        name: 'Agba Ogidan',
        votes: 20
      },
      {
        name: 'Dudu Osun',
        votes: 25
      }
    ],
    totalVotes: 33,
    voters: 33

  }
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
            {polls.length < 1 ? (<CreatePoll createPoll={handleCreatePoll} />) : (<PollDisplay data={polls} />)}
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