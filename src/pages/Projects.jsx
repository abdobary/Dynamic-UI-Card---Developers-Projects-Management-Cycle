import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Projects() {
  return (
    <section className='py-4'>
      <Outlet />
    </section>
  )
}
