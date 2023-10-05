import { styled } from '@mui/material/styles';
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
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function Searchbar() {
  return (
    <Stack className='container-searchbar'>
      <Search className='search'>
        <StyledInputBase
          className='searchbar'
          inputProps={{ 'aria-label': 'search' }}
        />
        <Button className='button-searck' style={{color: 'black'}}>
            <SearchIcon />
        </Button>
      </Search>
    </Stack>
  );
}