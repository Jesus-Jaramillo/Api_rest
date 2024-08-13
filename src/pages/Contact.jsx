import Navigates from "../routes/Navigates";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from 'axios';
import { Button, Card, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from "@mui/x-data-grid";

const fetchPokemonList = async ({ queryKey }) => {
  const [, url] = queryKey;
  const { data } = await axios.get(url);
  return data;
};

const columns = [
  { field: 'id', headerName: 'ID Pokemon', width: 70 },
  { field: 'pokemon', headerName: 'Name Pokemon', width: 130 },
];

const rows = [
  { id: 1, firstName: "junio"},
];



function Contact() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");

  const { data: list, status } = useQuery(['pokemonList', url], fetchPokemonList, {
    keepPreviousData: true,
  });

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

      <div>
        <div className="boxx">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>

      <br />
      <br />

      <div>
        {list?.results && list.results.map((pokemon) => (
          <Card key={pokemon.name} sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
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

export default Contact;
