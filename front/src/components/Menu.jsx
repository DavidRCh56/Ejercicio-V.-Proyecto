import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/register">Registro</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>
  );
};

export default Menu;
