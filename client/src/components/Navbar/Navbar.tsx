import { Box, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import './Navbar.scss'

function Navbar() {
    const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box className='navbar-container'>
      <Stack className='stack-first-container'>
        <img src='../../assets/logoSuperMarket.png' alt="SuperMarket" className='logo' />
        <Searchbar />
        <Stack className='stack-links'>
          <NavLink to='/login' style={{ textDecoration: 'none', color: 'white' }}>
            Iniciar sesion
          </NavLink>
          <NavLink to='/profile' style={{ textDecoration: 'none', color: 'white' }}>
            <AccountCircleIcon />
          </NavLink>
          <NavLink to='/favorites' style={{ textDecoration: 'none', color: 'white' }}>
            <FavoriteIcon />
          </NavLink>
          <NavLink to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
            <Badge badgeContent={'1'} color="secondary">
              <ShoppingCart />
            </Badge>
          </NavLink>
        </Stack>
      </Stack>
      <Stack>
        <Stack>
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">Categorías</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleChange}
            label="Category"
          >
            <MenuItem value="">
              <em>Todas</em>
            </MenuItem>
            <MenuItem value={10}>Map categories</MenuItem>
          </Select>
        </FormControl>
          <NavLink to='/offers'>
            Ofertas
          </NavLink>
          <NavLink to='/help'>
            Ayuda
          </NavLink>
          <NavLink to='/history'>
            Historial
          </NavLink>
        </Stack>
        <Stack>
          <LocalPhoneIcon />
          <Typography variant="h1" component="h2">0800-999-9999</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
export default Navbar