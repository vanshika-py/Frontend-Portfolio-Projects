import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h2 className=' font-medium'>Hello <br/> 
      <span className='text-2xl font-semibold'>Vanshika 🫂</span> </h2>
      
      <button className='bg-red-600 text-white-lg font-medium px-3 py-2 rounded-s'>Log out</button>
    </div>
  )
}

export default Header
