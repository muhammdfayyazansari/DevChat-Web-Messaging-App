import React from "react";
import { Grid, Box,Avatar } from "@mui/material";
import theme from "./../theme";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";




const Picture = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.subtitle1,
  color: theme.palette.background.main,
}));
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
const Friends = () => {
  return (
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            paddingRight: 1,
            paddingY: 1,
            // borderBottom: "1px solid #414141",
            bgcolor: theme.palette.secondary.main,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              bgcolor: "secondary.main",
            }}
            direction="row"
          >
            <Picture>
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </Picture>
            <Main>
              <Name>Name</Name>
              <Message>Message</Message>
            </Main>
          </Stack>
        </Box>
      </Grid>
  );
};

export default Friends;
