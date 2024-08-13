import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Joyride from "react-joyride";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navigates() {

  const [start, setStart] = useState(false);

  const [steps] = useState(
    [
      {
        content: <h1> Aqui empezara el tutorial guiado </h1>,
        placement: "center",
        target: "body"
      },
      {
        target: ".step-1",
        content: 'Este apartado te llevara al Inicio'
      },
      {
        target: ".step-2",
        content: 'Este apartado muestra un ejemplo de la Api pokemon agregada a una card'
      },
      {
        target: ".step-3",
        content: 'Este apartado muestra un ejemplo de numeros aleatorios usando react query'
      },
      {
        target: ".step-4",
        content: 'Este apartado muestra un ejemplo de la Api pokemon agregada a una tabla en forma de lista'
      },
      {
        target: ".step-5",
        content: 'Este apartado muestra un ejemplo de la Api de Rick y mory agregada a una card y a una lista'
      },
      {
        target: ".step-6",
        placement: "left-start",
        content: 'Este apartado muestra un ejemplo de react Joyride'
      }
    ]
  )



  useEffect(() => {
    const tutorialCompleted = localStorage.getItem("tutorialCompleted");

    if (!tutorialCompleted) {
      setStart(true);
    }
  }, [])

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if (status === "finished") {
      localStorage.setItem("tutorialCompleted", "true");
      setStart(false);
    }
  };

  const handleActivarTurorial = () => {
    setStart(!start)
  }

  return (
    <div>
      <div col-span-6>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>


              <Joyride
                callback={handleJoyrideCallback}
                steps={steps}
                run={start}
                continuous
                showProgress
                showSkipButton
                scrollToFirstStep
                styles={{
                  options: {
                    arrowColor: '#e3ffeb',
                    backgroundColor: '#e3ffeb',
                    overlayColor: 'rgba(199, 199, 199, 0.623)',
                    primaryColor: '#000',
                    textColor: '#000',
                    width: 900,
                    zIndex: 1000,
                  }

                }}
              />
              <Container>
                <Row>
                  <Col xs={-2}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      className="step-1"
                    >
                      <NavLink to="/">
                        <Button variant="contained" color="primary">
                          Home
                        </Button>
                      </NavLink>
                    </Typography>
                  </Col>

                  <Col xs={-2}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      className="step-2"
                    >
                      <NavLink to="/pokemonCard">
                        <Button variant="contained" color="primary">
                          Pokemon Card
                        </Button>
                      </NavLink>
                    </Typography>
                  </Col>

                  <Col xs={-2}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      className="step-3"
                    >
                      <NavLink to="/randomnumber">
                        <Button variant="contained" color="primary">
                          Random number
                        </Button>
                      </NavLink>
                    </Typography>
                  </Col>

                  <Col xs={-2}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      className="step-4"
                    >
                      <NavLink to="/pokemonlist">
                        <Button variant="contained" color="primary">
                          Pokemon list
                        </Button>
                      </NavLink>
                    </Typography>
                  </Col>

                  <Col xs={-2}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      className="step-5"
                      sx={{ flexGrow: 2000000, display: { xs: "none", sm: "block" } }}
                    >
                      <NavLink to="/rick">
                        <Button variant="contained" color="primary">
                          Rick y Morty
                        </Button>
                      </NavLink>
                    </Typography>
                  </Col>

                  <Col xs={-2}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      className="step-6"
                      sx={{ flexGrow: 200000000, display: { xs: "none", sm: "block" } }}
                    >
                      <NavLink to="/joyride">
                        <Button variant="contained" color="primary">
                          React Joyride
                        </Button>
                      </NavLink>
                    </Typography>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <br />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32" onClick={handleActivarTurorial}><path fill="currentColor" d="M8 12a8 8 0 1 1 15.582 2.56a5.5 5.5 0 0 1 1.795.922A10 10 0 0 0 26 12c0-5.523-4.477-10-10-10S6 6.477 6 12c0 1.792.471 3.473 1.296 4.928a5.5 5.5 0 0 1 1.701-1.057A7.96 7.96 0 0 1 8 12m14.5 0c0 .79-.141 1.545-.399 2.245l-1.598-.309v-1.937a4.5 4.5 0 0 0-4.712-4.494a4.5 4.5 0 0 0-4.288 4.673v3.335a5.5 5.5 0 0 0-.974-.002A6.5 6.5 0 1 1 22.499 12m-6.498-3a3 3 0 0 0-3 3v5.495l-.449-.189a4 4 0 0 0-5.41 2.642l-.09.332a1.51 1.51 0 0 0 .963 1.817c4.74 1.653 6.227 3.924 6.801 5.503c.3.824 1.116 1.48 2.113 1.398l4.76-.388a3 3 0 0 0 2.649-2.194l1.52-5.526a4 4 0 0 0-3.097-4.988l-3.76-.727V12a3 3 0 0 0-3-3" /></svg>
      </div>
    </div>
  );
}

export default Navigates;
