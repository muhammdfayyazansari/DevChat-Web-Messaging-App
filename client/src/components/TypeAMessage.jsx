import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import theme from "../theme";
const TypeAMessage = () => {
  return (
    <TextField
      id="outlined-multiline-flexible"
      multiline
      fullWidth
      maxRows={3}
      size="small"
      placeholder="Type a message"
      // endAdornment={
      //   <InputAdornment position="end">
      //     <IconButton type="button" sx={{ color:"primary.text", }} aria-label="send">
      //       <SendIcon />
      //     </IconButton>
      //   </InputAdornment>
      // }
      //   <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      //   <SearchIcon />
      // </IconButton>

      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              color: "primary.text",
              ":focus": { color: "secondary.main" },
            }}
          >
            {/* <SendIcon sx={{cursor: "pointer",}} /> */}
            <IconButton
              type="button"
              sx={{ color: "primary.text" }}
              aria-label="send"
            >
              {/* <SendIcon /> */}
            <SendIcon sx={{cursor: "pointer",}} />

            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        margin: 0,
        padding: 0,
        "& legend": { display: "none" },
        "& .MuiOutlinedInput-root": {
          color: "primary.text",
          "& > fieldset": { border: "none" },
        },
        // "& fieldset": { top: 0 },
      }}
    />
  );
};

export default TypeAMessage;
