import DashboardLayout from '@/components/dashboard/layout/layout'
import React from 'react'

const Poll = () => {
  return (
    <div>Poll</div>
  )
}


export default Poll

Poll.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}