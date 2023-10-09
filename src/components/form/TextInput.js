import React from 'react'
import Eye from '../../../public/assets/icon/eye'

const TextInput = ({ icon = false, label, placeholder, type }) => {
  return (
    <div className='w-full'>
      <label className='block text-[#262626] text-[14px] capitalize'>{label}</label>
      <aside className='relative'>
        <input
          className='w-full py-3 border border-gray-300 px-3 text-[12px] my-2 rounded-md capitalize'
          placeholder={placeholder}
          type={type} />
        {icon && (
          <div className='absolute right-4  cursor-pointer top-1/2 -translate-y-1/2'>
            <Eye />
          </div>
        )}
      </aside>

    </div>
  )
}

export default TextInput