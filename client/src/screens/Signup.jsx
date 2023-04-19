import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
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
// import FormControl from "@mui/material/FormControl";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
const theme = createTheme({
  palette: {
    whatsApp: {
      green: "#00A884",
      vsCodeDark: "#1E1E1E",
      vsCodeBorder: "#414141",
    },
    primary: {
      // main: "#44c8ec"
      // main: '#748cf8',
      // main: '#075E54',
      // main: '#383838',
      main: "#8452B5",
      text: "#fff",
      background: "#383838",
    },
    secondary: {
      // main: '#19857b',
      // main: '#748cf8',
      // main: "#44c8ec"
      // main: "#128C7E"
      // main: "#025C4C"
      main: "#1E1E1E",
      background: "#272727",
    },
    // tertiary : {
    //   main: "#0c6178"
    // },
    // quatery:{
    //   main: "#25D366"
    // },
    // pantagon:{
    //   main:"#ECE5DD"
    // },
    // lightBlue:{
    //   main: "#34B7F1"
    // },
    // background:{
    //   // main:"#b3c2ce"
    //   main:"#8452B5"
    // },
    // angoori:{
    //   main: "#DCF8C6"
    // },
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

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const reduxData = useSelector((state) => state.userSlice);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("sign Up",{
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/")
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
              mt: 2,
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
              mb: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          > */}
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Full Name"
                name="email"
                autoComplete="email"
                sx={{
                  bgcolor: "transparent",
                }}
                autoFocus
              />
              <TextField
                size="small"
                margin="normal" 

                fullWidth
                id="number"
                label="Mobile Number"
                name="number"
                autoComplete="number"
                sx={{
                  bgcolor: "transparent",
                }}
                autoFocus
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{
                  bgcolor: "transparent",
                }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                size="small"
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
                    // <InputAdornment
                    //   position="end"
                    //   sx={{
                    //     color: "primary.text",
                    //     ":focus": { color: "secondary.main" },
                    //   }}
                    // >
                    //   {/* <SendIcon sx={{cursor: "pointer",}} /> */}
                    //   <IconButton
                    //     type="button"
                    //     sx={{ color: "primary.text" }}
                    //     aria-label="send"
                    //   >
                    //     {/* <SendIcon /> */}
                    //   <SendIcon sx={{cursor: "pointer",}} />

                    //   </IconButton>
                    // </InputAdornment>
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
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    onClick={() => {
                      navigate("/forgotpassword");
                    }}
                    sx={{ cursor: "pointer" }}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => {
                      navigate("/");
                    }}
                    sx={{ cursor: "pointer" }}
                    variant="body2"
                  >
                    {"Don't have an account? Log In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 3 }} />
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
