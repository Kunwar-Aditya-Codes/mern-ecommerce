import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='items' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
