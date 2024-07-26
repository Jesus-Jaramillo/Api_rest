// import { useEffect, useState } from "react";
// import Navigates from "../routes/Navigates";
// import { DataGrid } from '@mui/x-data-grid';
// import { useQuery } from "react-query";
// import { Button } from '@mui/material';


// /* const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'Name', headerName: 'First name', width: 130 },
//   // { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ]; */

// function Pokemon() {

//   const [list, setList] = useState({});
//   // const [id, setId] = useState(1);
//   const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
//   const [previous, setPrevious] = useState("");
//   const [next, setNext] = useState("")



// useEffect(() => {
//   // const pokeApi = () => {
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         setList(data);
//         setNext(data.next)
//         setPrevious(data.previous)
//       })
//   // }
// }, [url]);

// /*   const { data, status } = useQuery('pokemons', pokeApi)


//   if (status === "loading") {
//     return <span> Recuperando los datos almacenados </span>
//   }

//   if (status === 'error') {
//     return <span> Error en la obtencion de los datos </span>
//   } */

//   console.log(list)


//   const handleAnterior = () => {
//     previous && setUrl(previous);
//   }

//   const handleSiguiente = () => {
//     setUrl(next);
//   }

//   return (
//     <div>
//       <div>
//         <Navigates />
//       </div>

// {/*       <div className="boxx">
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//         />
//       </div> */}

//       <div>
//         <div>{list.results &&
//           <div>
//             {list.results.map((pokemon) => {
//               return (
//                 <div key={pokemon.name}> <h4>{pokemon.name} </h4> </div>
//               )
//             })}
//           </div>
//         }
//         </div>
//         <div>
//           <Button variant="outlined" onClick={handleAnterior}> Anterior </Button>

//           <Button variant="outlined" onClick={handleSiguiente}> Siguiente </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pokemon;


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

/* import Navigates from "../routes/Navigates";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from 'axios';
import { Button, Card, CardContent, Typography } from '@mui/material';

const fetchPokemonList = async ({ queryKey }) => {
  const [, url] = queryKey;
  const { data } = await axios.get(url);
  return data;
};

function Pokemon() {
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
      
      <br />
      <br />

      <h1> Esta el ejemplo de axios </h1>

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
    </div>
  );
}

export default Pokemon; */


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

function Pokemon() {
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

      <div>
        <table class="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pokemon;


