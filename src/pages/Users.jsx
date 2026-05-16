import React from 'react'
import FormDashboard from '../components/UI/FormDashboard/FormDashboard'
import TableDashboard from '../components/UI/TableDashboard/TableDashboard'
import { Outlet } from 'react-router-dom'

export default function Users() {
  return (
    <section className='py-4'>
      <Outlet />
    </section>
  )
}
