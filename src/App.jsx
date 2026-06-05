import { Hero } from "./Hero1";
import { Navbar } from "./Navbar2";
import Categories from "./Categories";
import Cards from "./Cards";
import Testimonials from "./Tesstimonials";
function App() {

  return (
    <div>
      <h1> Welcome to the E-commerce Website</h1>
      <Navbar />
      <Hero />
      <Categories />
      <Cards/>
      <Testimonials />
    </div>
  )
}

export default App
