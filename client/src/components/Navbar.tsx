import {
  Bars3Icon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='rounded-md bg-zinc-100 p-4 shadow-sm'>
      <div className='flex items-center justify-between '>
        <div>
          <Link to='/'>
            <h1 className='text-lg lg:text-2xl'>Mern Store</h1>
          </Link>
        </div>
        <div className='flex items-center space-x-4 lg:space-x-8'>
          <div>
            <Link to='/login' className='flex items-center'>
              <p className='hidden rounded-md bg-amber-600 px-8 py-2 font-light text-white shadow-md md:inline  md:text-lg'>
                Login
              </p>
              <UserIcon
                title='Login'
                className='h-6 w-6 rounded-full bg-amber-600 p-1 text-white md:hidden'
              />
            </Link>
          </div>

          <ShoppingBagIcon className='h-5 w-5  lg:h-6 lg:w-6' />
          <div className='relative'>
            <div>
              <Bars3Icon
                onClick={() => setIsOpen(!isOpen)}
                className='h-5 w-5 cursor-pointer lg:h-6 lg:w-6'
              />
            </div>
            <div
              className={`${isOpen ? '-translate-x-full' : 'translate-x-full'}
            absolute top-12 left-8 w-[15rem] list-none  space-y-2 rounded-md bg-zinc-100 p-2  text-lg font-light shadow-md transition duration-[250ms] ease-in md:top-16`}
            >
              <li className='rounded-md px-4 py-3 hover:bg-zinc-200'>
                Profile
              </li>
              <li className='rounded-md px-4 py-3 hover:bg-zinc-200'>
                Profile
              </li>
              <li className='rounded-md px-4 py-3 hover:bg-zinc-200'>
                Profile
              </li>
              <li className='rounded-md px-4 py-3 hover:bg-zinc-200'>
                Profile
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
