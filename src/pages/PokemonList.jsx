import Navigates from "../routes/Navigates";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from 'axios';
import { Button } from '@mui/material';
import * as React from 'react';

const fetchPokemonList = async ({ queryKey }) => {
  const [, url] = queryKey;
  const { data } = await axios.get(url);
  return data;
};


//URL: "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"

function PokemonList() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");

  const { data: list, status } = useQuery(['pokemonList', url], fetchPokemonList, {
    keepPreviousData: true,
  });

  console.log(list)

  const handleAnterior = () => {
    if (list?.previous) {
      setUrl(list.previous);
    }
  };

  const handleSiguiente = () => {
    if (list?.next) {
      setUrl(list.next);
    }
  };

  if (status === "loading") {
    return <span>Recuperando los datos almacenados...</span>;
  }

  if (status === 'error') {
    return <span>Error en la obtención de los datos</span>;
  }

  return (
    <div>
      <div>
        <Navigates />
      </div>

      <br />
      <br />

      <div>
        <div>
          <table class="table table-dark table-striped" style={{ width: 800, textAlign: "center" }}>
            <thead>
              <tr>
                <th scope="col">Name Pokemon</th>
                <th scope="col"> Url </th>
              </tr>
            </thead>
            <tbody>
              {list.results && list.results.map((pokemon) => (
                <tr>
                  <td>{pokemon.name}</td>
                  <td>{pokemon.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
      </div>
      <div>
        <Button variant="outlined" onClick={handleAnterior} disabled={!list?.previous}>Anterior</Button>
        <Button variant="outlined" onClick={handleSiguiente} disabled={!list?.next}>Siguiente</Button>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default PokemonList;


