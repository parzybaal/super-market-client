import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid } from '@mui/material';

export default function Searchbar() {
  return (
    <Grid container justifyContent='center' alignItems="center" className='search' >
      <Grid item xs={7} className='grid-1'>
        <Autocomplete
          className='autocomplete'
          freeSolo
          id="free-solo-1-demo"
          disableClearable
          options={products.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar...."
              InputProps={{
                ...params.InputProps,
                type: 'search',
                
              }}
            />
          )}
        />
      </Grid>
      <Grid item className='grid-2'>
        <Button className='button' sx={{height: '4em'}} style={{ color: 'black' }}>
          <SearchIcon />
        </Button>
      </Grid>
    </Grid>
  );
}

// Map de los productos autocomplete
const products = [
  { title: 'MAP PRODUCTS' },
];



/* import { styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '25px',
  color: 'black',
  backgroundColor: '#F4F4F4',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  borderRadius: '25px',
  border: '0.1px solid rgba(0, 0, 0, 0.44)',
  '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
              width: '20ch',
          },
      },
  },
}));

export default function Searchbar() {
  return (
    <Stack className='container-searchbar'>
      <Search className='search'>
        <StyledInputBase
          placeholder="Buscar..."
          className='searchbar'
          inputProps={{ 'aria-label': 'search' }}
        />
        <Button className='button-searck' style={{color: 'black'}}>
            <SearchIcon />
        </Button>
      </Search>
    </Stack>
  );
} */