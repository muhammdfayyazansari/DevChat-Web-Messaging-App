import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router";


const theme = createTheme({
  palette: {
    whatsApp: {
      green: "#00A884",
      vsCodeDark: "#1E1E1E",
      vsCodeBorder: "#414141",
    },
    primary: {
      main: "#8452B5",
      text: "#fff",
      background: "#383838",
    },
    secondary: {
      main: "#1E1E1E",
      background: "#272727",
    },
  },
});
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
      DevChat
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// #8452B5

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage:
              "url(https://img.freepik.com/free-vector/isometric-illustration-customer-support_23-2148890649.jpg?w=740&t=st=1681843855~exp=1681844455~hmac=2bca37e6b48ad7ec08dbeda6c06bdf31bb9c489e3c8b2fa51369bb6f5bb6c39f)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 6,
              mb: 2,
              mx: 4,
            }}
          >
            <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
              Welcome To DevChat
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link onClick={()=>{navigate("/forgotpassword")}} sx={{cursor: "pointer"}} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={()=>{navigate("/signup")}} sx={{cursor: "pointer"}} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// import React from "react";
// import { Grid, Typography } from "@mui/material";

// const Signup = () => {
//   return (
//     <Grid container>
//       <Grid item xs={12}>
//         <Typography variant="h1">Signup</Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export default Signup;

// import React from 'react'
// import { Grid, Typography } from '@mui/material';

// const Login = () => {
//   return (
//     <Grid container>
//       <Grid item xs={12}>
//         <Typography variant="h1">Login</Typography>
//       </Grid>
//     </Grid>
//   )
// }

// export default Login
