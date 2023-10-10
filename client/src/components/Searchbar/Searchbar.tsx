import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid } from '@mui/material';

export default function Searchbar() {
  return (
    <Grid  container justifyContent='center' alignItems="center">
      <Grid item xs={7.5}>
        <Autocomplete
          freeSolo
          id="free-solo-1-demo"
          disableClearable
          options={products.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Buscar...."
              sx={{background:'white', borderRadius:'6px'}}
              InputProps={{
                ...params.InputProps,
                type: 'search',
                
              }}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Button sx={{position:'relative',right:'4.5em', height:'4em', borderRadius:'0 6px 6px 0'}} style={{ color: 'black' }}>
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

