import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  return (
    <div className='flex flex-grow items-center justify-center  p-2'>
      <div className='rounded-md bg-white p-4 shadow-md  md:p-6 lg:w-[40%]'>
        <form className='w-full space-y-8 md:text-lg '>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full rounded-md border-2 border-amber-600 px-4 py-3 outline-none'
          />
          <input
            type='password'
            placeholder='Enter your password'
            className='w-full rounded-md border-2 border-amber-600 px-4 py-3 outline-none'
          />

          <button
            disabled={true}
            className='w-full rounded-md bg-amber-600 py-3 text-white disabled:bg-zinc-400'
          >
            Login
          </button>
        </form>

        <div className='mt-6 space-y-4 font-light'>
          <p className='text-lg'>
            New User?
            <Link
              to='/register'
              className='ml-1 font-normal text-amber-600 underline decoration-amber-600  underline-offset-2'
            >
              Register here!
            </Link>
          </p>

          <p className='text-zinc-600'>
            <Link to='/' className='underline underline-offset-2'>
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
