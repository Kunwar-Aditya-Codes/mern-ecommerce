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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-grow items-center justify-center  p-2'>
      <div className='rounded-md bg-white p-4 shadow-md  md:p-6 lg:w-[40%]'>
        <form className='w-full space-y-8 md:text-lg '>
          <input
            type='email'
            value={loginData.email}
            onChange={handleChange}
            name='email'
            placeholder='Enter your email'
            className='w-full rounded-md border-2 border-purple-600
 px-4 py-3 outline-none'
          />
          <input
            type='password'
            value={loginData.password}
            onChange={handleChange}
            name='password'
            placeholder='Enter your password'
            className='w-full rounded-md border-2 border-purple-600
 px-4 py-3 outline-none'
          />

          <button
            className='w-full rounded-md bg-purple-600
 py-3 text-white disabled:bg-zinc-400'
          >
            Login
          </button>
        </form>

        <div className='mt-6 space-y-4 font-light'>
          <p className='text-lg'>
            New User?
            <Link
              to='/register'
              className='ml-1 font-normal text-purple-600
 underline decoration-purple-600
  underline-offset-2'
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
