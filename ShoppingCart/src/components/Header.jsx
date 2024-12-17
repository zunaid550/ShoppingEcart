import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { AppBar} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import TopToolbar from "./TopToolbar";
import NavBar from "./NavBar";






//import Nav from "./Nav";



const Header = () => {
  const theme = useTheme();
  return (
    <>
    <AppBar position="fixed">
      <TopToolbar/>
      <NavBar/>
    </AppBar>
   
    
    <Button variant="contained">Hello world</Button>
      <NavLink to="/">
        
      </NavLink>
      </>
  );
};


export default Header;


