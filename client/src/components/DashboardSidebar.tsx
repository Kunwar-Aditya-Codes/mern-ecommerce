import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <div className='h-full'>
      <div className='  text-xl font-light'>
        <Link to='/admin/dashboard'>
          <p className='rounded-md p-2 transition ease-out hover:bg-zinc-200 hover:shadow'>
            Products
          </p>
        </Link>
      </div>
    </div>
  );
};
export default DashboardSidebar;
