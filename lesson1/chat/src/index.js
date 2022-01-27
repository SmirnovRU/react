import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { MessageList, ChatList, Header, Layout } from "./components";
import "./palette.css";

// function App() {
//   return (
//     <div>
//       <MessageList />
//       <ChatList />
//     </div>
//   );
// }

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout
        header={<Header />}
        chats={<ChatList />}
        messages={<MessageList />}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
