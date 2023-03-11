import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<h1>Home</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
