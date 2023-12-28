import React from 'react'

function Login() {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-full h-[90dvh]'>

        <form action="" className='flex flex-col justify-center items-center w-2/5 h-[50dvh] border gap-y-4 p-4 rounded-md shadow-md'>
        <h1 className="text-3xl font-medium my-2">Login</h1>
        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-md" />
        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-md" />
        <input type="submit" value="Login" className="input input-bordered bg-accent-content w-full text-white max-w-md" />
        <a href='/register' className='text-blue-600'>create new account</a>
        </form>
        </div>
    </>
  )
}

export default Login