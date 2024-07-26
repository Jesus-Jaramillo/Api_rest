import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Grids from "../components/grids";
import Example from "../pages/Example";
import Pokemon from "../pages/Pokemon";
import RickAndMorty from "../pages/rickAndMorty";
// import ProductCard from "../components/ProductCard";


function Ruts() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/productcard" element={<ProductCard />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/grids" element={<Grids />} />
        <Route path="/example" element={<Example />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/rick" element={<RickAndMorty />} />
      </Routes>
  );
}

export default Ruts;
