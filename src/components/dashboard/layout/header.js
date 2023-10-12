import React from 'react'
import Profile from '../../../../public/dashboard/icons/Profile'

const Header = ({ navTitle }) => {
  return (
    <header className='w-full h-[80px] border-2 rounded-bl-2xl items-center flex bg-white'>
      <nav className='w-full flex justify-between items-center px-8'>
        <h3 className='font-semibold text-2xl capitalize'>{navTitle?.name || 'Poll'}</h3>
        <section className='f gap-2' >
          <aside className='flex items-center'>
            <p className='mx-8 text-[#095494] font-semibold'>Support</p>
            <div className='flex items-center'>
              <Profile />
              <p className='mx-2'>Youngy Duu</p>
            </div>
          </aside>
        </section>

      </nav>
    </header>
  )
}

export default Header