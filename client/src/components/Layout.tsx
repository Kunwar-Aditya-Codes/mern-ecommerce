import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className=' flex min-h-screen flex-col overflow-x-hidden bg-zinc-300 p-4 '>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};
export default Layout;
