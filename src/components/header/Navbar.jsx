import React from 'react'
import BrandName from './BrandName'
import NavBtn from './NavBtn'
import NavItem from './NavItem'

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between px-4 py-3'>
      <BrandName/>
      <NavBtn/>
    </nav>
    </>
  )
}

export default Navbar