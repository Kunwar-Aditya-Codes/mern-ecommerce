import { useState } from 'react';
import { Link } from 'react-router-dom';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-grow items-center justify-center  p-2'>
      <div className='rounded-md bg-white p-4 shadow-md  md:p-6 lg:w-[40%]'>
        <form className='w-full space-y-8 md:text-lg '>
          <input
            type='text'
            value={registerData.username}
            onChange={handleChange}
            name='username'
            placeholder='Enter your username'
            className='w-full rounded-md border-2 border-amber-600 px-4 py-3 outline-none'
          />
          <input
            type='email'
            value={registerData.email}
            onChange={handleChange}
            name='email'
            placeholder='Enter your email'
            className='w-full rounded-md border-2 border-amber-600 px-4 py-3 outline-none'
          />
          <input
            type='password'
            value={registerData.password}
            onChange={handleChange}
            name='password'
            placeholder='Enter your password'
            className='w-full rounded-md border-2 border-amber-600 px-4 py-3 outline-none'
          />

          <button
            disabled={true}
            className='w-full rounded-md bg-amber-600 py-3 text-white disabled:bg-zinc-400'
          >
            Register
          </button>
        </form>

        <div className='mt-6 space-y-4 font-light'>
          <p className='text-lg'>
            Already have account?
            <Link
              to='/login'
              className='ml-1 font-normal text-amber-600 underline decoration-amber-600  underline-offset-2'
            >
              Login here!
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
export default Register;
