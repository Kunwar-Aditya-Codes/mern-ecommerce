import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className='space-y-8 py-4'>
      <div className='w-full items-center space-y-3 md:flex md:justify-start md:space-y-0 md:space-x-4'>
        <select
          name='filter'
          id='filter'
          className='w-full max-w-xl rounded-md bg-zinc-100 p-2 shadow-sm outline-none'
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

      <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:justify-items-start xl:grid-cols-4 '>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
export default Products;
