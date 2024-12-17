import { FormControl, IconButton, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
    const [age, setAge] = useState('');
   
  return (
    <>    
    <FormControl sx={{ display:'inline-block',  padding:'8px'}}>
        <Select
                value={age}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>       
    
    </FormControl>
    <FormControl sx={{ display:'inline-block', width:'40%'}}>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Search"
        variant="outlined"
        size="small"
        fullWidth
        />
        
      </FormControl>
      <FormControl sx={{ display:'inline-block', background:'#febd69'}}>
        <IconButton>
            <SearchOutlinedIcon/>
        </IconButton>
      </FormControl>
    </>
    
    
  )
}

export default SearchBar