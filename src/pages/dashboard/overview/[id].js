import DashboardLayout from '@/components/dashboard/layout/layout'
import React, { useState } from 'react'
import Dashboard from '.'
import { useParams } from 'next/navigation'
import { pollData } from '@/components/DummyData'

const PollResults = () => {
  const { id } = useParams();
  console.log(id)
  // const [polls, setPolls] = useState(pollData)
  const pollResult = pollData.filter((data) => Number(data.id) === Number(id))[0]

  console.log(pollResult, 'polldata')
  return (
    <section>
      <h3 className='text-2xl uppercase my-6 font-bold'>Employee of the year result</h3>
      <article className='flex items-start gap-6'>
        <aside className='w-2/4'>
          {pollResult?.candidates?.map((data, id) => (
            <div key={id} className='w-full mr-10 mb-6'>
              <article className='p-4 rounded-md border'>
                <aside className='flex justify-between items-center'>
                  <p className='font-bold'>{data.name}</p>
                  <p>{Math.round((data.votes / pollResult.totalVotes) * 100)}%</p>
                </aside>
                <p className='h-3 my-4 bg-gray-300 rounded-lg'>

                </p>
                <p className='text-[14px] text-gray-400'>{data.votes} Votes</p>
              </article>
            </div>
          ))
          }
        </aside>

        <aside className='p-4 px-6 rounded-md border font-bold'>
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


