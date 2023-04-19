import React from 'react'
import "./../App.css";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";
import {
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import SearchInput from "./../components/SearchInput";
import { styled } from "@mui/material/styles";
import TypeAMessage from "./../components/TypeAMessage";
import MessageBox from "./../components/MessageBox";
import Friends from "./../components/Friends";


// const Picture = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.secondary.main,
//   ...theme.typography.subtitle1,
//   color: theme.palette.background.main,
// }));

const Main = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  paddingLeft: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  width: "100%",
  color: theme.palette.background.main,
}));
const Name = styled(Box)(({ theme }) => ({
  ...theme.typography.subtitle1,
}));
const Message = styled(Box)(({ theme }) => ({
  ...theme.typography.caption,
}));



const Dashboard = () => {
  return (
    <Grid
    container
    bgcolor="secondary.main"
    rowSpacing={0}
    // bgcolor="blue"
    sx={{ color: "#fff" }}
  >
    {/* // HEADER PART START */}
    <Grid item xs={12} bgcolor="secondary.main">
      <Grid
        container
        columns={24}
        bgcolor="secondary.main"
        sx={{
          height: "10vh",
          paddingLeft: 1,
          borderBottom: "solid 1px #414141",
        }}
      >
        {/* MAIN USER SECTION */}
        <Grid
          item
          xs={7}
          bgcolor="secondary.main"
          sx={{
            borderRight: "solid #414141 1px",
            borderBottom: "solid 1px #414141",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ paddingY: 1 }}>
            <Avatar
              alt="cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
          </Box>
          {/* SECOND PERSON  */}
        </Grid>
        <Grid
          item
          xs={17}
          bgcolor="secondary.main"
          sx={{ display: "flex", alignItems: "center", paddingLeft: 1,
        }}
        >
          <Box sx={{ display: "flex", alignItems: "center", paddingY: 1 }}>
            <Avatar
              alt="cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Main>
              <Name>Name</Name>
              <Message>Online</Message>
            </Main>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columns={24}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          height: "90vh",
          maxHeight: "90vh",
          paddingLeft: 1,
        }}
      >
        <Grid
          item
          xs={7}
          // bgcolor="purple"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            height: "100%",
            borderRight: "solid #414141 1px",
          }}
        >
          <Box
            bgcolor="#1E1E1E"
            sx={{
              display: "flex",
              width: "100%",
              paddingRight: 1,
              paddingY: 1,
              borderBottom: "1px solid #414141",
            }}
          >
            <SearchInput />
            {/* <TextField
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
              }}
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            /> */}
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              overflowY: "scroll",
              overflowX: "auto",
            }}
          >
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
          </Grid>
        </Grid>

        {/* Chat Box  */}
        <Grid
          item
          xs
          bgcolor="secondary.background"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Grid container>
            <MessageBox />
            <Grid item sx={{ borderTop: "solid #414141 1px", 
           backgroundColor: "secondary.main" 
          }} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingX: 2,
                  paddingY: 1,
                }}
              >
                <TypeAMessage />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {/* // HEADER PART END */}

    {/* <Button variant="contained" color="primary">
      primary
    </Button>
    <Button variant="contained" color="secondary">
      secondary
    </Button>
    <Button variant="contained" color="tertiary">
      tertiary
    </Button>
    <Button variant="contained" color="quatery">
      quatery
    </Button>
    <Button variant="contained" color="background">
      fayyaz
    </Button> */}
  </Grid>
  )
}

export default Dashboard