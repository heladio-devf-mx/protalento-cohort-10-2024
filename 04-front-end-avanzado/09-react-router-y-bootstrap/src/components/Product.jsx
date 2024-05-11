import { useParams } from 'react-router-dom';

export default function Product() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product</h1>
      <h2>product_id: {productId}</h2>
    </div>
  );
}
