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
import Logo from '../../assets/logoSuperMarket.png';
import './Navbar.scss'

function Navbar() {
    const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box className='navbar-container'>
      <Stack className='stack-first-container'>
        <img src={Logo} alt="SuperMarket" className='logo' />
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
      <Stack className='stack-second-container'>
        <Stack className='stack-second-1'>
          <FormControl variant="standard" className='select-container' style={{ textDecoration: 'none', color: 'white', marginLeft: '3em', marginRight: '3em'}}>
            <InputLabel id="demo-simple-select-standard-label" className='select-label'>Categorías</InputLabel>
            <Select
              className='select-input'
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
          <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: '3em', marginRight: '3em'}} to='/offers'>
            <p className='stack-second-navlinks'>Ofertas</p>
          </NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: '3em', marginRight: '3em'}} to='/help'>
            <p className='stack-second-navlinks'>Ayuda</p>
          </NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: '3em', marginRight: '3em'}} to='/history'>
            <p className='stack-second-navlinks'>Historial</p>
          </NavLink>
        </Stack>
        <Stack className='stack-second-2'>
          <LocalPhoneIcon className='stack-logo-phone' />
          <Typography variant="h1" className='stack-p-phone' component="h2">0800-999-9999</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
export default Navbar