 //import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FinalContact from "./pages/Contact";
// import Navbar from "./components/Navbar";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Production from "./pages/Production";

// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Production from "./pages/Production";
// import "./styles/Global.css";

function App() {
  
  //  console.log("App component is running...");

  return (
    
    //  <Router>  
     // <Navbar />  
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Contact" element={<FinalContact />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Production" element={<Production/>} />
      </Routes>
      // </Router>  
  );
}

export default App;
