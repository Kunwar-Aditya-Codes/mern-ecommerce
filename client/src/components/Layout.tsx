import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className=' flex min-h-screen flex-col overflow-x-hidden bg-zinc-300'>
      <div className='flex flex-grow flex-col p-4'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
