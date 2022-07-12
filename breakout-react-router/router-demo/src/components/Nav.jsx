import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>This is the Nav component</h2>
      <Link to="/about">About </Link>
      <Link to="/">Home </Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Nav;
