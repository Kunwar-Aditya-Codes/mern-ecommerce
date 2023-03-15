const CartCard = () => {
  return (
    <div className='my-4 flex flex-col items-center space-y-4 rounded-md bg-zinc-100 pb-6 shadow-sm md:flex-row md:justify-between md:space-y-0 md:pb-0 md:pr-8'>
      <div className='items-center md:flex'>
        <div className=' max-w-[12rem]'>
          <img
            src='https://itronics.in/wp-content/uploads/2021/09/iphone-13-midnight-select-2021.png'
            alt=''
            className=''
          />
        </div>
        <div className='text-center md:space-y-2 md:text-start'>
          <h1 className='text-2xl  md:text-3xl lg:text-4xl'>Iphone</h1>
          <p className='text-2xl font-light'>$100.00</p>
        </div>
      </div>

      <div className='flex h-full flex-col items-center justify-center space-y-4 '>
        <div
          className='flex w-full items-center justify-between  rounded-md border-2  border-purple-600
 px-2  py-1 text-xl '
        >
          <button className=''>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button className='rounded-md bg-red-600 px-4 py-2 font-light text-white'>
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartCard;
