import "../styles/Hero.css";
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1>Interior Design</h1>
        <p>Bringing your interior dreams to  life</p>
        <button className="start-btn">Start Project</button>
      </div>
      <div className="hero-images">
        <img src={interior1} alt="Interior 1" />
        <img src={interior2} alt="Interior 2" />
      </div>
    </header>
  );
}

export default Hero;