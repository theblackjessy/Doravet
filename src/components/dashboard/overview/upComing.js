import Button from '@/components/form/Button'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const Upcoming = () => {
  const [copied, setCopied] = useState(false)



  return (
    <div className='border-t-[1px]  p-5 w-full'>
      <h3 className='font-bold text-[16px]'> Poll URL</h3>
      <p className='text-[#4F4F4F] text-[14px]'> Accessible only after poll in launched</p>
      <div className='flex justify-between'>
        <p className=' w-[300px] py-3 border border-gray-300 px-3 text-[14px] my-2 rounded-md '>
          https://Dorav.com/polls/27653ai...</p>
        <CopyToClipboard
          text={'https://Dorav.com/polls/27653ai...'}
          onCopy={() => setCopied(true)}
        >
          {
            copied ? (<Button text={'Copied'} bg='primary-light' style='' color='primary' />) :
              <Button text={'Copy'} bg='primary-light' style='' color='primary' />
          }
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default Upcoming