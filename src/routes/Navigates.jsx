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
import { NavLink, Link } from "react-router-dom";
import DarkThemeWithCustomPalette from "../components/ModeDark";

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

              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                <NavLink to="/">
                  <Button variant="contained" color="primary">
                    Home
                  </Button>
                </NavLink>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                <NavLink to="/about">
                  <Button variant="contained" color="primary">
                    About
                  </Button>
                </NavLink>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                <NavLink to="/contact">
                  <Button variant="contained" color="primary">
                    Contact
                  </Button>
                </NavLink>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                <NavLink to="/example">
                  <Button variant="contained" color="primary">
                    Example
                  </Button>
                </NavLink>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                <NavLink to="/pokemon">
                  <Button variant="contained" color="primary">
                    Pokemon
                  </Button>
                </NavLink>
              </Typography>


              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 2000000, display: { xs: "none", sm: "block" } }}
              >
                <NavLink to="/rick">
                  <Button variant="contained" color="primary">
                    Rick y Morty
                  </Button>
                </NavLink>
              </Typography>

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


      {/*       <div>
      <ToggleColorMode/>
      </div> */}
    </div>
  );
}

export default Navigates;
