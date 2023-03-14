import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DashboardSidebar from './components/DashboardSidebar';
import Layout from './components/Layout';
import Dashboard from './pages/Admin/Dashboard';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='items' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
