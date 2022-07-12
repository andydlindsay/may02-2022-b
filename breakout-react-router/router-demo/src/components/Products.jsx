import { Link } from 'react-router-dom';

const Products = (props) => {
  console.log(props);

  return (
    <div>
      <h2>This is the Products component</h2>
  
      <Link to="2">Product #2</Link><br/>
      <Link to="3">Product #3</Link><br/>
      <Link to="4">Product #4</Link><br/>
      <Link to="5">Product #5</Link><br/>
    </div>
  );
};

export default Products;
