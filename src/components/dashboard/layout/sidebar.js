import Link from 'next/link'
import React from 'react'
import Logout from '../../../../public/dashboard/icons/Logout'
import styles from './layout.module.css'
import cls from 'classnames'

const Sidebar = ({ navItem, currentRoute }) => {
  return (
    <section className={cls(styles.sidebar)}>
      {navItem.map((data, id) => (
        <Link key={id} href={`/dashboard${data.url}`} className={cls(styles.link, currentRoute === data.url && styles.active)}>
          <li className='flex items-center'>
            <p className='mx-4'>{data.icon}</p>
            <p>{data.name}</p>
          </li>
        </Link>
      ))}
      <Link href={'/login'} className={cls('mt-24 px-5 py-5')}>
        <li className='flex items-center'>
          <p className='mx-4'><Logout /></p>
          <p className='text-red-600'>Log Out</p>
        </li>
      </Link>
    </section>
  )
}

export default Sidebar