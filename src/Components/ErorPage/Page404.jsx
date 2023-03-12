import React from 'react'
import { NavLink } from 'react-router-dom'

function Page404() {
  return (
    <div className='flex flex-col justify-center items-center   content-center'>
      <div className='text-8xl text-red-800'>404</div>
      <div className='text-3xl text-teal-600'>Page Not Found /<NavLink to='/' className='text-5xl text-amber-500'>HOME</NavLink></div> 
      
    </div>
  )
}

export default Page404
