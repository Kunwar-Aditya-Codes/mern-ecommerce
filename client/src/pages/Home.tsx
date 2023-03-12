import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className='py-4'>
      <div className='w-full items-center space-y-3 md:flex md:justify-start md:space-y-0 md:space-x-4'>
        <select
          name='filter'
          id='filter'
          className='w-full max-w-xl rounded-md bg-zinc-100 p-2 shadow-md outline-none'
        >
          <option value=''>Filter</option>
          <option value=''>Home</option>
          <option value=''>Technology</option>
          <option value=''>Food</option>
        </select>

        <button className='w-full rounded-md bg-amber-600 p-2 text-white md:w-[8rem]'>
          Search
        </button>
      </div>

      <div>
        <ProductCard />
      </div>
    </div>
  );
};
export default Home;
