 import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Production</a></li>
      </ul>
      <button className="start-btn">Start Project</button>
    </nav>
  );
}

export default Navbar;