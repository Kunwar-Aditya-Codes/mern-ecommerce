import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
