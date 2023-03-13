import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-grow  bg-[url("hero.jpg")] bg-cover bg-center bg-no-repeat bg-blend-color '>
      <div className='flex flex-grow flex-col items-center justify-center  space-y-8 bg-black/80'>
        <h1 className=' text-center text-4xl font-bold uppercase text-zinc-100 md:text-5xl lg:text-6xl xl:text-7xl'>
          Mern Store
        </h1>
        <p className='text-center text-sm font-light text-zinc-100 md:text-base lg:text-lg '>
          Shop stop for all-in-one window shopping!
        </p>

        <div className='flex flex-col space-y-4 font-light md:flex-row md:items-center md:space-y-0 md:space-x-4 lg:text-xl'>
          <Link
            to='/items'
            className='rounded-md bg-amber-600 px-5 py-3 text-zinc-100'
          >
            View Product
          </Link>
          <Link
            to='/login'
            className='rounded-md border-2 border-amber-600 px-10 py-3 text-center text-zinc-100'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
