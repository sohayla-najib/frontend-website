import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <h3>CONTACT US</h3>
        <p>Send us a message</p>
        <p>Full Name ...............</p>
        <p>Your Email ...............</p>
        <p>Your Message ...........</p>
      </div>
      <div className="links">
        <h3>LINKS</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Production</a></li>
        </ul>
      </div>
      <div className="logo">
        <h3>LOGO</h3>
        <p> 01999111</p>
        <p> xdesign@gmail.com</p>
        <p> Facebook | LinkedIn</p>
      </div>
    </footer>
  );
}

export default Footer;