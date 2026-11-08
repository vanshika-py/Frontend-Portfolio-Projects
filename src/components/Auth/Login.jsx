import React from 'react'

const Login = () => {
    const submitHandler = (e) =>{
      e.preventDefault()
      console.log("form submitted")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 p-20 border-emerald-600 rounded-xl'>

  <form 
  onSubmit={(e)=>{
    submitHandler(e)
  }}
  
  
  className='flex flex-col items-center justify-center'>
  <input required type='email' placeholder='Enter your email' className='text-black bg-transparent text-center placeholder:text-grey-400 border-2 mt-3  outline-none border-emerald-600  py-5 px-4 rounded-full text-xl'/>
  <input required type='password' placeholder='Enter Password' className='text-black bg-transparent text-center placeholder:text-grey-400 border-2 outline-none border-emerald-600  py-5 px-4 rounded-full text-xl mt-4'/>
  <button className='text-grey border-none bg-emerald-600 placeholder:text-white outline-none py-5 px-4 rounded-full text-center-xl mt-5'> Log in </button>

  </form>

    </div>
    </div>
  )
}

export default Login
