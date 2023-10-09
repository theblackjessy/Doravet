import DashboardLayout from '@/components/dashboard/layout/layout'
import React from 'react'

const Notifications = () => {
  return (
    <div>Notifications</div>
  )
}


export default Notifications

Notifications.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}