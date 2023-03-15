import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Layout from './components/Layout';
import ProductDashboard from './pages/Admin/ProductDashboard';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
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
        <Route path='admin/dashboard' element={<AdminLayout />}>
          <Route index element={<ProductDashboard />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
