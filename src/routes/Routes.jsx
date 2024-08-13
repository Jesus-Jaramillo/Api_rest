import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Grids from "../components/grids";
import RickAndMorty from "../pages/rickAndMorty";
import JoyridePage from "../pages/JoyridePage";
import PokemonCard from "../pages/PokemonCard";
import PokemonList from "../pages/PokemonList";
import RandomNumber from "../pages/RandomNumber";


function Ruts() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonCard" element={<PokemonCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/grids" element={<Grids />} />
        <Route path="/randomnumber" element={<RandomNumber />} />
        <Route path="/pokemonList" element={<PokemonList />} />
        <Route path="/rick" element={<RickAndMorty />} />
        <Route path="/joyride" element={<JoyridePage />} />
      </Routes>
  );
}

export default Ruts;
