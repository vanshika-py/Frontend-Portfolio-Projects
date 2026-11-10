import React from 'react'
import Header from '../others/Header'
import TasklistNumbers from '../others/TasklistNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className=' bg-[#1C1C1C] min-h-screen w-full text-white'>
        <Header/>
        <TasklistNumbers/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard
