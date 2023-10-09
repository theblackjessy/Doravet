import DashboardLayout from '@/components/dashboard/layout/layout'
import React from 'react'

const Voters = () => {
  return (
    <div>Voters</div>
  )
}


export default Voters

Voters.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}