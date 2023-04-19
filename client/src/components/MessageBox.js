// import React from "react";
// import { Grid, Typography } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         body: {
//           scrollbarColor: "#6b6b6b #2b2b2b",
//           "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
//             backgroundColor: "#2b2b2b",
//           },
//           "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
//             borderRadius: 8,
//             backgroundColor: "#6b6b6b",
//             minHeight: 24,
//             border: "3px solid #2b2b2b",
//           },
//           "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
//             backgroundColor: "#959595",
//           },
//           "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
//             backgroundColor: "#959595",
//           },
//           "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
//             backgroundColor: "#959595",
//           },
//           "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
//             backgroundColor: "#2b2b2b",
//           },
//         },
//       },
//     },
//   },
// });

// const MessageBox = () => {
//   const theme = createTheme({
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         body: {
//           scrollbarColor: "#6b6b6b #2b2b2b",
//           "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
//             backgroundColor: "#2b2b2b",
//           },
//           "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
//             borderRadius: 8,
//             backgroundColor: "#6b6b6b",
//             minHeight: 24,
//             border: "3px solid #2b2b2b",
//           },
//           "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
//             backgroundColor: "#959595",
//           },
//           "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
//             backgroundColor: "#959595",
//           },
//           "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
//             backgroundColor: "#959595",
//           },
//           "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
//             backgroundColor: "#2b2b2b",
//           },
//         },
//       },
//     },
//   },
// });
//   return (
//     <ThemeProvider theme={theme}>
//     <Grid
//       item
//       xs={12}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         overflowX: "hidden",
//         overflowY: "scroll",
//         height: "530px",
//       }}
//     >
//       <Typography variant="display1">fayyaz ansari</Typography>
//       <Typography variant="display1">uncle</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//       <Typography variant="display1">boora</Typography>
//     </Grid>
//     </ThemeProvider>
//   );
// };

// export default MessageBox;

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
let allMessages = [
  "I wondered why the baseball was getting bigger. Then it hit me.",
  "Police were called to a day care, where a three-year-old was resisting a rest.",
  "Did you hear about the guy whose whole left side was cut off? He’s all right now.",
  "The roundest knight at King Arthur’s round table was Sir Cumference.",
  "To write with a broken pencil is pointless.",
  "When fish are in schools they sometimes take debate.",
  "The short fortune teller who escaped from prison was a small medium at large.",
  "A thief who stole a calendar… got twelve months.",
  "A thief fell and broke his leg in wet cement. He became a hardened criminal.",
  "Thieves who steal corn from a garden could be charged with stalking.",
  "When the smog lifts in Los Angeles , U. C. L. A.",
  "The math professor went crazy with the blackboard. He did a number on it.",
  "The professor discovered that his theory of earthquakes was on shaky ground.",
  "The dead batteries were given out free of charge.",
  "If you take a laptop computer for a run you could jog your memory.",
  "A dentist and a manicurist fought tooth and nail.",
  "A bicycle can’t stand alone; it is two tired.",
  "A will is a dead giveaway.",
  "Time flies like an arrow; fruit flies like a banana.",
  "A backward poet writes inverse.",
  "In a democracy it’s your vote that counts; in feudalism, it’s your Count that votes.",
  "A chicken crossing the road: poultry in motion.",
  "If you don’t pay your exorcist you can get repossessed.",
  "With her marriage she got a new name and a dress.",
  "Show me a piano falling down a mine shaft and I’ll show you A-flat miner.",
  "When a clock is hungry it goes back four seconds.",
  "The guy who fell onto an upholstery machine was fully recovered.",
  "A grenade fell onto a kitchen floor in France and resulted in Linoleum Blownapart.",
  "You are stuck with your debt if you can’t budge it.",
  "Local Area Network in Australia : The LAN down under.",
  "He broke into song because he couldn’t find the key.",
  "A calendar’s days are numbered.",
];

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          color: blue;
        }
    
        ::-webkit-scrollbar {
          width: 1rem;
        }
        ::-webkit-scrollbar-track {
           display: none;
           background-color: rgb(24 24 29);
        }
        ::-webkit-scrollbar-thumb {
          background: #959595;
            border: 5px solid transparent;
            border-radius: 9px;
            background-clip: content-box;
        }
      `,
    },
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "*::-webkit-scrollbar": {
    //         width: "2px"
    //       },
    //       "*::-webkit-scrollbar-track": {
    //         background: "#E4EFEF"
    //       },
    //       "*::-webkit-scrollbar-thumb": {
    //         background: "#1D388F61",
    //         borderRadius: "2px"
    //       }
    //     }
    //   }
    // }
    // MuiCssBaseline: {
    // body: {
    //   scrollbarColor: "#6b6b6b #2b2b2b",
    //   "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
    //     backgroundColor: "#2b2b2b",
    //   },
    //   "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
    //     borderRadius: 8,
    //     backgroundColor: "#6b6b6b",
    //     minHeight: 24,
    //     border: "3px solid #2b2b2b",
    //   },
    //   "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
    //     {
    //       backgroundColor: "#959595",
    //     },
    //   "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
    //     {
    //       backgroundColor: "#959595",
    //     },
    //   "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
    //     {
    //       backgroundColor: "#959595",
    //     },
    //   "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
    //     backgroundColor: "#2b2b2b",
    //   },
    // },
    // },
  },
});
let count = 0;
export default function OverrideCssBaseline() {
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // 👇️ simulate chat messages flowing in
    console.log("count in flowing ", count);
    setInterval(() => {
      setMessages((current) => [...current, allMessages[count]]);
    }, 1000);
   
  }, []);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("count in bottom ", count);
    count++;
  }, [messages]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <h1>Grey h1 element</h1> */}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: "scroll",
          height: "510px",
          paddingX: 3,
        }}
      >
        <div>
          <h2>Top of the page</h2>

          <div>
            {messages.map((message, index) => {
              return <p key={index}>{message}</p>;
            })}

            <div ref={bottomRef} />
          </div>
        </div>
      </Grid>
    </ThemeProvider>
  );
}
