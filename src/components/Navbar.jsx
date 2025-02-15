
 import "../styles/Navbar.css";

//  import { Link } from "react-router-dom";

 import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate(); // Use the navigate hook to programmatically navigate

  // Handle button click to navigate to the Contact page
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><Link to="/">Home </Link></li>
        <li><Link to="/projects">Projects</Link></li>

        {/* <li><Link to="/contact">Contact</Link></li> */}
        <li><Link to="/about">About </Link></li>

        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/aboutus">About </Link></li>
       <li><Link to="/production">Production</Link></li> 
      </ul> 
       <button className="start-btn" onClick={goToContact}> Contact-us </button> 

      </nav>
  );
}

export default Navbar;

      