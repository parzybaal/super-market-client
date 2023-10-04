import { Box, Select, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Image } from '@mui/icons-material'
import Searchbar from '../Searchbar/Searchbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './Navbar.scss'

function Navbar() {
  return (
    <Box className='navbar-container'>
      <Stack>
        <Image>logo</Image>
        <Searchbar />
        <Stack>
          <NavLink to='/login'>
            Iniciar sesion
          </NavLink>
          <NavLink to='/profile'>
            <AccountCircleIcon />
          </NavLink>
          <NavLink to='/favorites'>
            <FavoriteIcon />
          </NavLink>
          <NavLink to='/cart'>
            <Badge badgeContent={'cart?.length'} color="secondary">
              <ShoppingCart />
            </Badge>
          </NavLink>
        </Stack>
      </Stack>
      <Stack>
        <Stack>
          <Select>
            Category
          </Select>
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