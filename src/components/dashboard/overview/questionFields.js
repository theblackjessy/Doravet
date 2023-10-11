import React from 'react'
import Delete from '../../../../public/dashboard/icons/Delete'

const QuestionFields = ({ toggleModal }) => {
  return (
    <section className='rounded-lg border p-4 bg-white my-4'>
      <input

        placeholder={`Question 1}`}
        className='w-full py-3 border border-gray-300 px-3 text-[12px] my-2 rounded-md capitalize'

      />
      <aside className='my-2'>
        <div className='flex items-center my-2' >
          <p className='w-4 h-4 rounded-full border border-gray-300'></p>
          <p className='mx-4 text-[#4F4F4F]'>Option 1</p>
        </div>
        <div className='flex items-center my-2'>
          <p className='w-4 h-4 rounded-full border border-gray-300'></p>
          <p className='mx-4 text-[#095494]'>Add Option</p>
        </div>
        <div className='flex justify-end cursor-pointer' onClick={toggleModal}>
          <Delete fill='#4F4F4F' />
        </div>
      </aside>
    </section>
  )
}

export default QuestionFields