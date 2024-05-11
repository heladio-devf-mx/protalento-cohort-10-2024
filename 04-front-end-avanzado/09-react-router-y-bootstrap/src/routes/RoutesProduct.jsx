import { Route, Routes } from 'react-router-dom';
import Product from '../components/Product';

export default function ProductRoutes() {
  return (
    <Routes>
      <Route path='/product/:productId' element={<Product />} />
    </Routes>
  );
}
