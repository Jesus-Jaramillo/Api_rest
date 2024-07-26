/* import { useEffect, useState } from "react";
import Navigates from "../routes/Navigates";
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from "react-query";
import { Button } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'First name', width: 130 },
  // { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Contact() {

  const [list, setList] = useState({});
  // const [id, setId] = useState(1);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("")



  const pokeApi = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setList(data);
        setNext(data.next)
        setPrevious(data.previous)
      })
  }


  const { data, status } = useQuery('pokemons', pokeApi)


  if (status === "loading") {
    return <span> Recuperando los datos almacenados </span>
  }

  if (status === 'error') {
    return <span> Error en la obtencion de los datos </span>
  }

  console.log(list)


  const handleAnterior = () => {
    previous && setUrl(previous);
  }

  const handleSiguiente = () => {
    setUrl(next);
  }

  return (
    <div>
      <div>
        <Navigates />
      </div>

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

      <div>
        <div>{list.results &&
          <div>
            {list.results.map((pokemon) => {
              return (
                <div key={pokemon.name}> <h4>{pokemon.name} </h4> </div>
              )
            })}
          </div>
        }
        </div>
        <div>
          <Button variant="outlined" onClick={handleAnterior}> Anterior </Button>

          <Button variant="outlined" onClick={handleSiguiente}> Siguiente </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact; */

/* import { useState } from "react";
import Navigates from "../routes/Navigates";
import { useQuery } from "react-query";
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'First name', width: 130 },
  // { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const fetchPokemons = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json();
};

function Contact() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");

  const { data, status } = useQuery(['pokemons', url], () => fetchPokemons(url), { keepPreviousData: true });

  const handleAnterior = () => {
    if (data?.previous) {
      setUrl(data.previous);
    }
  };

  const handleSiguiente = () => {
    if (data?.next) {
      setUrl(data.next);
    }
  };

  if (status === "loading") {
    return <span>Recuperando los datos almacenados...</span>;
  }

  if (status === 'error') {
    return <span>Error en la obtención de los datos.</span>;
  }

  return (
    <div>
      <div>
        <Navigates />
      </div>

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

      <div>
        <div>
          {data?.results && (
            <div>
              {data.results.map((pokemon) => (
                <div key={pokemon.name}>
                  <h4>{pokemon.name}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <Button variant="outlined" onClick={handleAnterior} disabled={!data?.previous}>Anterior</Button>
          <Button variant="outlined" onClick={handleSiguiente} disabled={!data?.next}>Siguiente</Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
 */



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
  // { field: 'lastName', headerName: 'Last name', width: 130 },
/*   {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  }, */
];

const rows = [
  { id: 1, firstName: "junio"},
  // { id: 2, firstName: 'Cersei'},
  // { id: 3, firstName: 'Jaime'},
  // { id: 4, firstName: 'Arya'},
  // { id: 5, firstName: 'Daenerys'},
  // { id: 6, firstName: null},
  // { id: 7, firstName: 'Ferrara'},
  // { id: 8, firstName: 'Rossini'},
  // { id: 9, firstName: 'Harvey'},
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
