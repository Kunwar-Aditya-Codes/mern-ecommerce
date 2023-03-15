import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const AdminLayout = () => {
  return (
    <div className='mt-4 flex flex-grow'>
      {/* <div className='mr-4 flex-[0.15] rounded-md bg-zinc-100 p-4'>
        <DashboardSidebar />
      </div> */}
      <div className='flex-grow rounded-md bg-zinc-100 p-4'>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
