import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <header className="bg-black mb-5">
        <Navbar />
      </header>
      <main className="my-5 container mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </main>
      <footer className="mt-5">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
