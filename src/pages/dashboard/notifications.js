import DashboardLayout from '@/components/dashboard/layout/layout'
import React from 'react'
import { pollData } from '@/components/DummyData'

const Notifications = () => {
  const pollResult = pollData[1]
  return (
    <section>
    <main className='px-32 py-10'>
      <h3 className='text-2xl uppercase my-6 font-bold'>Employee of the year result</h3>
      <article className='flex items-start justify-between '>
        <aside className='w-2/4'>
          {pollResult?.candidates?.map((data, id) => (
            <div key={id} className='w-full mr-10 mb-6 '>
              <article className='p-4 rounded-md border w-[600px]'>
                <aside className='flex justify-between items-center'>
                  <p className='font-bold'>{data.name}</p>
                  <p>{Math.round((data.votes / pollResult.totalVotes) * 100)}%</p>
                </aside>
                <p className={`h-3 relative my-4 bg-gray-300 rounded-lg before:w-3/4 before:absolute before:rounded-lg before:bg-green-700 overflow-hidden before:h-full before:content-['']`}>

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
      </main>
    </section>
  )
}


export default Notifications

Notifications.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}