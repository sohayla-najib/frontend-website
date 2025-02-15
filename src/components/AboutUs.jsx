
import "../styles/AboutUs.css"; 
import interior1 from "../assets/images/interior1.jpg";
import interior3 from "../assets/images/interior3.jpg";
import interior4 from "../assets/images/interior4.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="our-story">
        <h2>Our Story</h2>
        <p>Founded in 20xx, VNA DECOR began with a simple vision: to create spaces that reflect individuality and elegance.</p>
        <img src={interior1} alt="Our Story" />
      </section>
      <section className="mission-values">
        <h2>Mission and Values</h2>
        <p>We believe in blending functionality with aesthetics to create spaces that inspire and delight.</p>
        
      </section>
      <section className="our-team">
        <h2>Our Team</h2>
        <p>Meet our talented designers, architects, and project managers who bring your vision to life.</p>
        <img src={interior3} alt="Our Team" />
      </section>

      <section className='working -with-us'>
        <h2>Working with Us</h2>
        <p>Working with VIVA DECOR was a seamless experience.
        They truly understood our vision!</p>
        <img src={interior4} alt="Working with Us" />
        </section>
    </div>
  );
};

export default AboutUs;