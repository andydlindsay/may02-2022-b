import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Product = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(1);
    }, 3000);
  }, []);

  useEffect(() => {
    // axios.get(`/products/${params.productId})
    //   .then(response => {
    //     setProduct(response.data);
    //   });
    // getProduct(params.productId);
  }, [params.productId]);

  return (
    <div>
      <h2>This is the Product component #{params.productId}</h2>
    </div>
  );
};

export default Product;
