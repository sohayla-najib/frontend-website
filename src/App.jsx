import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import "./App.css";

// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Production from "./pages/Production";
// import "./styles/Global.css";

function App() {
  
  console.log("App component is running...");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /
        <Route path="/production" element={<Production />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
