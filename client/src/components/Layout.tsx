import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className=' min-h-screen overflow-x-hidden bg-zinc-300 p-2 '>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};
export default Layout;
