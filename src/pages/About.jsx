import Navigates from "../routes/Navigates";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function About() {

  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);
  // const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}`);

  //IMPORTANTE: IDENTIFICADOR DE LA API
  /* ${id} */

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const datos = pokemon;


  const pokeApi = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      })
  }

  const { data, status } = useQuery(['pokemons', id], pokeApi)


  if (status === "loading") {
    return <span> Recuperando los datos almacenados </span>
  }

  if (status === 'error') {
    return <span> Error en la obtencion de los datos </span>
  }

  const handleAnterior = () => {
    id > 1 && setId(id - 1)
    if (id > 1) {
      setId(id - 1);
    }
  }

  const handleSiguiente = () => {
    setId(id + 1);
  }

  console.log(pokemon)


  return (
    <div>
      <div>
        <Navigates />
      </div>

      <br />
      <br />

      <div>{pokemon &&
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} height={150} width={150}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ID: {pokemon.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p> Se debera buscar la description de este pokemon </p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {id > 1 ? <Button variant="outlined" onClick={handleAnterior}> Anterior </Button> : <Button variant="disabled" onClick={handleAnterior}> Anterior </Button>}

              <Button variant="outlined" onClick={handleSiguiente}> Siguiente </Button>
            </CardActions>
          </Card>
        </div>
      }
      </div>
    </div>
  );
}

export default About;