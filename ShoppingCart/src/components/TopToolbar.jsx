import React from 'react'

import { Toolbar,Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LeftTopToolbar from './LeftTopToolbar';

import Search from './SearchBar'
import RightTopToolbar from './RightTopToolbar';
function TopToolbar() {
    const theme = useTheme();
  return (
    <>
    <Toolbar>
        <LeftTopToolbar/>
        <Search />
        <RightTopToolbar/>
    </Toolbar>
    <Divider/>
    </>
  )
}

export default TopToolbar