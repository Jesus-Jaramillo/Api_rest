import { useState, useEffect } from 'react';
import Navigates from "../routes/Navigates";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

function RickAndMorty() {
    const [rick, setRick] = useState([]);
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
    const [open, setOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setRick(res.data.results);
                console.log(res.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [url]);

    const handleOpen = (character) => {
        setSelectedCharacter(character);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCharacter(null);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <div>
                <Navigates />
            </div>

            <div>
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Species</th>
                            <th scope="col">Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rick.map((character) => (
                            <tr key={character.id}>
                                <th>{character.id}</th>
                                <td>{character.name}</td>
                                <td>{character.species}</td>
                                <td>
                                    <h1>
                                        <span className="material-symbols-outlined" onClick={() => handleOpen(character)}>
                                            reviews
                                        </span>
                                    </h1>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {rick.map((character) => (
                    <Card key={character.id} sx={{ maxWidth: 400, marginBottom: 2 }} className="mt-8">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                <img src={character.image} alt={character.name} height={150} width={150} />
                            </Typography>
                            <Typography variant="h5" component="div">
                                {character.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {character.species}
                            </Typography>
                            <Typography variant="body2">
                                {character.status}
                                <br />
                                {character.origin.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <div>
                                <Button size="small" onClick={() => handleOpen(character)}>Learn More</Button>
                            </div>
                        </CardActions>
                    </Card>
                ))}
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {selectedCharacter && (
                            <>
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    {selectedCharacter.name}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    <img src={selectedCharacter.image} alt={selectedCharacter.name} height={150} width={150} />
                                    <br />
                                    Species: {selectedCharacter.species}
                                    <br />
                                    Status: {selectedCharacter.status}
                                    <br />
                                    Origin: {selectedCharacter.origin.name}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
export default RickAndMorty;
