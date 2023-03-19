import React from 'react'
import Banner from '../Banner/Banner'
import Brands from '../Brands/Brands'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'

function Home() {
  return (
    <div className='flex flex-col gap-y-24 '>
     <Navbar/>   
     <Banner/>
     <Brands/>
     <Products/>
     </div>
  )
}

export default Home
