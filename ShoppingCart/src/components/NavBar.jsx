import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton, Toolbar, Typography} from '@mui/material';

function NavBar() {
  return (
    <>
    <Toolbar variant="dense" style={{ background: '#232F3E', height: '10%' }}>
        <IconButton>
          <MenuOutlinedIcon/>
        </IconButton>
        
        <Typography variant='h10'>
         All
        </Typography>
        <div style={{  display: 'flex', flexDirection: 'row'}}>

            </div>
        


    </Toolbar>
    </>
  )
}

export default NavBar