import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {  IconButton, Typography } from '@mui/material';
const LeftTopToolbar = () => {
  return (
   <>
   <img src="./images/logo-no-background.png" tooltip="my logo img"  style={{ width: '8%', height: '10%' }}  />
        <IconButton>
          <LocationOnOutlinedIcon/>
        </IconButton>
        <div style={{  display: 'flex', flexDirection: 'column'}}>
        <Typography variant='h20'>
          Delivering to Dehradun,248001
        </Typography>
        <Typography variant='h10'>
          Update Location
        </Typography>
        </div>
    </>
  )
}

export default LeftTopToolbar