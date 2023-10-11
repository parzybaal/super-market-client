import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import imgGoogle from './assets/Google.jpg';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:5173/">
        SuperMarket
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleGoogle = (event: any): void => {
    event.preventDefault();
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            height:'100vh',
            backgroundImage: 'url(https://i.pinimg.com/originals/8c/30/13/8c3013b5f4339339407de4165941d1c8.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{background:'#F4F4F4'}}>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#38A34A' }}>
              <LockOutlinedIcon sx={{color:'white'}} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Ingresar
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar mi contraseña"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: 'initial' }}
              >
                Iniciar sesión
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/login/recover-password" variant="body2">
                    ¿Has olvidado tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                    <Link href="/register" variant="body2">
                        {"¿Todavía no tienes una cuenta? Registrate"}
                    </Link>
                </Grid>
                <Grid sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', width:'100%', marginTop:'1em'}}>
                    <p>Iniciar sesión con</p>
                    <Grid sx={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'row', width:'100%'}}>
                        <button style={{ border:'none', background:'transparent', margin:'.3em'}} onClick={() => handleGoogle} type="submit">
                            <img style={{height:'3em', width: '3em', cursor:'pointer'}} src={imgGoogle} />
                        </button>
                        <button style={{ border:'none', background:'transparent', margin:'.3em'}} onClick={() => handleGoogle} type="submit">
                            <FacebookRoundedIcon style={{color:'#1877F2',height:'2em', width: '2em', cursor:'pointer'}} />
                        </button>
                    </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
            <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}