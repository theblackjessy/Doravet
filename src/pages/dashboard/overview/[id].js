import DashboardLayout from '@/components/dashboard/layout/layout'
import React, { useState } from 'react'
import Dashboard from '.'
import { useParams } from 'next/navigation'
import { pollData } from '@/components/DummyData'

const PollResults = () => {
  const { id } = useParams();
  console.log(id)
  // const [polls, setPolls] = useState(pollData)
  const pollResult = pollData.filter((data) => Number(data.id) === Number(id))

  console.log(pollResult, 'polldata')
  return (
    <section>
      <h3 className='text-2xl uppercase my-6 font-bold'>Employee of the year result</h3>
      <article>
        <aside>
          <article className='p-4 rounded-md border'>
            <aside className='flex justify-between items-center'>
              <p>Idan Highdan</p>
              <p>65%</p>
            </aside>
            <p>progress</p>
            <p>18 votes</p>
          </article>
        </aside>
        <aside className='p-4 rounded-md border'>
          <p className='my-2'>Total Votes - 33</p>
          <p className='my-2'>Registered Votes - 33</p>
        </aside>
      </article>
    </section>
  )
}

PollResults.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <Dashboard>
        {page}
      </Dashboard>
    </DashboardLayout>
  )
}
export default PollResults


