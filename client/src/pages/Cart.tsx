import CartCard from '../components/CartCard';

const Cart = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row'>
      <div className='grid max-w-5xl flex-[0.6] flex-grow grid-cols-1 justify-items-stretch'>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>

      <div className='mt-4 h-fit w-full flex-[0.4] space-y-4 rounded-md bg-zinc-100  p-4 shadow-md md:space-y-6 lg:ml-4'>
        <h1
          className='border-b border-purple-600
 pb-2 text-center text-2xl font-medium tracking-wide'
        >
          Subtotal
        </h1>
        <div className='space-y-2 font-light md:text-xl'>
          <p className='flex items-center justify-between '>
            Total Items
            <span className='rounded-md  px-6 py-1 font-medium '>5</span>
          </p>
          <p className='flex items-center justify-between '>
            Total Price
            <span
              className='rounded-md border-2 border-purple-600
 px-6 py-1 font-medium '
            >
              $100.00
            </span>
          </p>
        </div>

        <button
          className='w-full rounded-md bg-purple-600
 py-2 text-center font-medium  text-white md:text-lg'
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};
export default Cart;
