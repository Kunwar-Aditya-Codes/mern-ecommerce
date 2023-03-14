import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const AdminLayout = () => {
  return (
    <div className='flex'>
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};
export default AdminLayout;
