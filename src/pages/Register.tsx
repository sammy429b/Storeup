import React from 'react'

function Register() {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSubmit = async (event) => {
    }

  return (
    <>
        <div className="w-full h-[90dvh] flex items-center justify-center ">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-4 rounded-md shadow-lg border w-[90%] md:w-2/5 h-[24rem]">
                <h1 className="text-3xl font-medium my-2">Register</h1>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-md"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-md"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        className="input input-bordered w-full max-w-md"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input
                        type="submit"
                        className="btn btn-active btn-neutral w-full max-w-md"
                        value="Sign up"
                    />
                    <a href='/login' className='text-blue-600 my-2'>login Instead?</a>
                </form>
                {error && (
                    <div className="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{error}</span>
                  </div>
                )}

            </div>
    </>
  )
}

export default Register