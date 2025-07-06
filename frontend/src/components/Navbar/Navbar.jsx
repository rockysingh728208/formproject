import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-300 h-16 w-full items-center p-4'>
<div><h1 className='text-2xl'>Welcome to my website</h1></div>
<div className='flex gap-6 text-[18px]'>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/signin">Signin</Link>

</div>
    </div>
  )
}

export default Navbar