import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Math Magicians</h1>
    <ul className="navbar-list">
      <li className="link"><NavLink to="/">Home</NavLink></li>
      |
      <li className="link separated"><NavLink to="/calculator">Calculator</NavLink></li>
      |
      <li className="link separated"><NavLink to="/quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
