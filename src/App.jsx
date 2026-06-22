import { Hero } from "./Hero1";
import { Navbar } from "./Navbar2";
import {Categories} from "./Categories";
import {Testimonials} from "./Tesstimonials";
import { Footer } from "./Footer";
import Cards from "./Cards";
import { Routes, Route } from "react-router-dom";
import ProductAddForm from "./ProductAddForm";

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
        <Route path="/cards" element={<Cards />} />
        <Route 
path="/add-product"
element={<ProductAddForm/>}
/>
      </Routes>
    </div>
  );
}

export default App;