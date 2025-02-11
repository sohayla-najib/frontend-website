
 import "../styles/Navbar.css";

 import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><Link to="/">Home </Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact us">Contact us</Link></li>
        <li><Link to="/about us">About us </Link></li>
        <li><Link to="/production">Production</Link></li> 
      </ul> 
       <button className="start-btn">Start Project</button> 
      </nav>
  );
}
export default Navbar;

      