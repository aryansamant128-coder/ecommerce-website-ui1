import { Hero } from "./Hero1";
import { Navbar } from "./Navbar2";
import {Categories} from "./Categories";
import {Testimonials} from "./Tesstimonials";
import { Footer } from "./Footer";
import { Cards } from "./cards";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
      <Navbar />

      <h1>Welcome to the E-commerce Website</h1>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;