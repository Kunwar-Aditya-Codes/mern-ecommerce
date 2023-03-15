import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

const ProductList = () => {
  return (
    <table className='w-full '>
      <thead>
        <tr className=' bg-amber-600  text-zinc-100 shadow-lg  '>
          <th className='hidden  md:table-cell'>Product Image</th>
          <th className='py-2'>Name</th>
          <th className='hidden  md:table-cell'>Category</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b border-amber-600 text-center text-lg font-light'>
          <td className='hidden items-center justify-center md:flex'>
            <img
              src='https://itronics.in/wp-content/uploads/2021/09/iphone-13-midnight-select-2021.png'
              alt=''
              className='max-w-[4rem]'
            />
          </td>
          <td className='py-2'>Iphone</td>
          <td className='hidden md:table-cell'>Electronics</td>
          <td className=''>25</td>
          <td className=''>
            <div className='flex items-center justify-evenly'>
              <TrashIcon className='h-5 w-5 cursor-pointer text-red-500' />
              <PencilSquareIcon className='h-5 w-5 cursor-pointer text-sky-600' />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ProductList;
