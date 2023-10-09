import DashboardLayout from '@/components/dashboard/layout/layout'
import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard page
    </div>
  )
}


Dashboard.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <Dashboard>{page}</Dashboard>
    </DashboardLayout>
  )
}
export default Dashboard