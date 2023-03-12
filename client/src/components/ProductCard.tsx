const ProductCard = () => {
  return (
    <div className='w-fit rounded-md bg-zinc-100 m-2 p-4'>
      <div className='max-w-[15rem] '>
        <img
          src='https://itronics.in/wp-content/uploads/2021/09/iphone-13-midnight-select-2021.png'
          alt=''
          className=''
        />
      </div>

      <div className='space-y-2'>
        <h1 className='text-xl font-medium'>Iphone</h1>
        <p className='text-sm text-zinc-500'>
          This is a smartphone with smart features
        </p>
        <p className='text-xl font-light'>$ 100.00</p>
        <button className='rounded-md border-2 border-amber-600 px-4 py-2  font-light'>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
