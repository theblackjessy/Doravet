import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <main className={`flex h-screen bg-[#FAFAFA]`}>
      <section className='w-[300px] bg-white  h-full shadow-sm'>

      </section>
      <section className='w-full'>
        <nav className='w-full h-[100px] border-2  rounded-b-2xl'>

        </nav>
        {children}
      </section>
    </main>
  )
}

export default DashboardLayout