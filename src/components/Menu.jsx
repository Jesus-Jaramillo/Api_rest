import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function Menu() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerItems = (
    <List>
      <ListItem button key="Home">
        <NavLink to="/" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary="Home" />
        </NavLink>
      </ListItem>
      <ListItem button key="Pokemon Card">
        <NavLink to="/pokemonCard" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary="Pokemon Card" />
        </NavLink>
      </ListItem>
      <ListItem button key="Random number">
        <NavLink to="/randomnumber" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary="Random number" />
        </NavLink>
      </ListItem>
      <ListItem button key="Pokemon list">
        <NavLink to="/pokemonlist" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary="Pokemon list" />
        </NavLink>
      </ListItem>
      <ListItem button key="Rick y Morty">
        <NavLink to="/rick" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary="Rick y Morty" />
        </NavLink>
      </ListItem>
      <ListItem button key="React Joyride">
        <NavLink to="/joyride" onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemText primary="React Joyride" />
        </NavLink>
      </ListItem>
    </List>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AppBar Desplegable
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerItems}
      </Drawer>
    </div>
  );
}

export default Menu;
