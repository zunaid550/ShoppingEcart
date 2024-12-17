import React from 'react'
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Typography } from '@mui/material';

function RightTopToolbar() {
  return (
    <>
     <div style={{  padding:'8px'}}>
        <IconButton>
            <GTranslateOutlinedIcon/>
        </IconButton>
        <Typography variant='h10'>
            EN
        </Typography>
    </div>
    
    <div style={{  padding:'8px',display: 'flex', flexDirection: 'column'}}>
        <Typography variant='h20'>
          Hello Sign In
        </Typography>
        <Typography variant='h10'>
         Accounts & Lists
        </Typography>
    </div>
    <div style={{  padding:'8px',display: 'flex', flexDirection: 'column'}}>
        <Typography variant='h20'>
            Returns
        </Typography>
        <Typography variant='h10'>
        & Orders
        </Typography>
    </div>
    <div style={{  padding:'8px'}}>
        <IconButton>
            <ShoppingCartOutlinedIcon/>
        </IconButton>
        <Typography variant='h10'>
            Cart
        </Typography>
        </div>
    </>
  )
}

export default RightTopToolbar