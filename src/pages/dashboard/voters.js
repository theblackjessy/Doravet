import { TableData } from '@/components/DummyData'
import DashboardLayout from '@/components/dashboard/layout/layout'
import React, { useState } from 'react'
import Delete from '../../../public/dashboard/icons/Delete'
import Modal from '@/components/modal'
import Button from '@/components/form/Button'

const Voters = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(prev => !prev)
  }
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
      <Modal open={open} toggleModal={toggleModal} >
        <section className='text-center py-3'>
          <p className='bg-[#FFDDDD] flex justify-center items-center w-10 h-10 rounded-full mx-auto my-3'>
            <Delete />
          </p>
          <h3 className='font-bold'>Delete Voter?</h3>
          <p className='text-[14px] w-[300px] mx-auto my-4'>Are you sure you to delete this voter? This action cannot be undone</p>
          <div className='flex justify-evenly items-center w-[300px] mx-auto'>
            <Button text={'Yes,Delete'} className={'bg-red-600'} />
            <Button text={'Cancel'} handleClick={toggleModal} className={' bg-[#EAE9E9]'} color='text-[#4F4F4F]' />
          </div>
        </section>
      </Modal>
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