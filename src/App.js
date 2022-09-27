import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Navbar } from "./components/Navbar/Navbar";




function App() {
  
  return (

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </Router>

  );
}

export default App;
