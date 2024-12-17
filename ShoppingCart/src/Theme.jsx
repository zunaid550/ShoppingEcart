import React from "react";

import { createTheme } from '@mui/material';

const theme = createTheme({
    palette:{
      primary:{
        main: '#1976d2', //primary color
      },
      secondary:{
        main: '#dc004e', //secondary color
      },
      background:{
        main: '#F4F4F4', //background color
      },
      padding8:{
        padding:'8px'
      },
      type: "dark"
      
    },
    typography:{
      fontFamily: 'Roboto, Arial, sans-serif',
      h1:{
        fontSize: '2rem',
        fontWeight:700,
      },
      h20:{
        fontSize:'0.7rem',
        fontWeight:400
      },
      h10:{
        fontSize:'0.9rem',
        fontWeight:700
      }
    },
    components:{
      MuiToolbar:{
        styleOverrides:{
          root :{
            backgroundColor : "#131921",
          }
        }
      },
      MuiIconButton:{
        styleOverrides:{
          root:{
            color: 'white'
          }
        }
      },
      MuiSelect:{
        styleOverrides:{
          root:{
            backgroundColor: "grey"
          }
        }
      },
      MuiTextField:{
        styleOverrides:{
          root:{
            backgroundColor: 'white'
          }
        }
      }
    }
  });

  export default theme;