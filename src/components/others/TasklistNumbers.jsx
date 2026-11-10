import React from 'react'


const TasklistNumbers = () => {
  return (

    <div className='flex justify-between gap-5 screen m-10'>
    
    <div className='bg-red-400 rounded-xl w-[45%] px-10 py-6'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
</div>

<div className='bg-green-400 rounded-xl w-[45%] px-10 py-6'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='bg-blue-400 rounded-xl w-[45%] px-10 py-6'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
</div>

<div className='bg-yellow-400 rounded-xl w-[45%] px-10 py-6'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
    </div>

    </div>
  
  )
}

export default TasklistNumbers
