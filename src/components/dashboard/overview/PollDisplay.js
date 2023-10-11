import React, { useState } from 'react'
import PollQuestion from '../../../../public/dashboard/icons/PollQuestion'
import PollOption from '../../../../public/dashboard/icons/PollOption'
import PollVoters from '../../../../public/dashboard/icons/PollVoters'
import DateIcon from '../../../../public/dashboard/icons/DateIcon'
import Button from '@/components/form/Button'
import EditButton from '../../../../public/dashboard/icons/EditButton'
import Link from 'next/link'
import Upcoming from './upComing'

const statusCheck = (value) => {
  switch (value) {
    case 0:
      return "Concluded"
    case 1:
      return "On going"
    case 2:
      return "Up coming"
    default:
      return "Concluded"
  }
}


const PollDisplay = ({ data }) => {
  const handleViewResult = (data) => {

  }

  const handleLinkCopy = () => {
    console.log('copied')
  }
  return (
    <section className='m-6 '>

      <main className='flex gap-5 flex-wrap  mb-28'>

        {data.map((item, id) => (
          <aside className='w-full md:w-[500px] border rounded-md  flex flex-col' key={id}>
            <div className='p-5'>
              <div className='flex justify-between items-center'>
                <h3 className='font-bold text-[16px]'>{item.title}</h3>
                <p className='text-[#026C1A] bg-[#F4FFF7] flex'>
                  <span className='inline-block mr-3'>

                    {statusCheck(item.status)}
                  </span>
                  {item.status === 2 && (<EditButton />)}
                </p>
              </div>
              <p className='text-[#939393] font-[14px] py-4'>{item.desc}</p>
              <aside className='md:flex justify-between py-6  font-[14px] text-[#4F4F4F]'>
                <div className='  flex flex-col'>
                  <div className='my-4 md:my-0 flex gap-1 items-center text-[#4F4F4F]'>
                    <DateIcon />
                    <p>Start date</p>
                  </div>
                  <p>{item.start}</p>
                </div>
                <div>
                  <div className='my-4 md:my-0 flex gap-1 items-center'>
                    <DateIcon />
                    <p>End date</p>
                  </div>
                  <p>{item.end}</p>
                </div>
              </aside>
            </div>
            <footer className=' h-full align-baseline flex items-end'>
              {
                item.status === 2 ? (
                  <Upcoming />
                ) : (
                  <div className='p-5'>
                    <Link href={`/dashboard/overview/${item?.id}`} >
                      <Button text={"View result"} bg='primary-light' style='' color='primary' />
                    </Link>
                  </div>
                )
              }
            </footer>


          </aside>
        ))}
      </main>
    </section>
  )
}


export default PollDisplay

