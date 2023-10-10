import { TableData } from '@/components/DummyData'
import DashboardLayout from '@/components/dashboard/layout/layout'
import React, { useState } from 'react'
import Delete from '../../../public/dashboard/icons/Delete'
import Modal from '@/components/modal'

const Voters = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false)
  const handleDeleteClick = (data) => {
    setOpen(true)
    console.log(data)
  }

  return (
    <>
      <section className=' mx-auto  h-[70vh] flex justify-center items-center'>
        <article className='w-[800px] border rounded-lg overflow-hidden'>
          <aside className='flex justify-between py-5 bg-gray-200 text-blackpy-5 font-bold px-4'>
            <h3>Email Address</h3>
            <h3>Wallet ID</h3>
            <h3>First Name </h3>
            <h3>Last Name </h3>
            <h3></h3>
          </aside>
          <aside className='' >
            {
              TableData.map((data, index) => (
                <div key={index} className='flex text-[12px] justify-between items-center border-b-2 p-4'>
                  <p className=''>{data.email}</p>
                  <p className=''>{data.walletid}</p>
                  <p className=''>{data.firstName}</p>
                  <p className=''>{data.lastName}</p>
                  <Delete handleClick={() => handleDeleteClick(data)} />
                </div>
              ))
            }
          </aside>
        </article>
      </section>
      <Modal open={open} handleModalClose={handleClose} />
    </>
  )
}


export default Voters

Voters.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}