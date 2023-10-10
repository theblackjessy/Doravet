import { SidebarData } from '@/components/DummyData'
import Link from 'next/link'
import React from 'react'
import Logout from '../../../../public/dashboard/icons/Logout'
import cls from 'classnames'
import styles from './layout.module.css'
import Profile from '../../../../public/dashboard/icons/Profile'
import { useRouter } from 'next/router'
import Sidebar from './sidebar'
import Header from './header'
const DashboardLayout = ({ children }) => {
  const { route } = useRouter()

  const currentRoute = route.split('/dashboard')[1]
  const navTitle = SidebarData.filter((route) => route?.url.toLowerCase() === currentRoute?.toLowerCase())[0]


  return (
    <main className={`flex h-screen bg-[#FAFAFA] `}>
      <Sidebar navItem={SidebarData} currentRoute={currentRoute} />
      <section className='w-full overflow-hidden '>
        <Header navTitle={navTitle} />
        <article className='p-6 overflow-y-scroll'>
          {children}
        </article>
      </section>
    </main>
  )
}

export default DashboardLayout