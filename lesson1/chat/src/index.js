import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Header } from "./components";
import { store } from "./store";
import { ChatPage, ProfilePage } from "./pages";
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
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<h1> Home Page</h1>} />
          <Route path="/*" element={<h1>Server not found. Error 404</h1>} />
        </Routes>
      </BrowserRouter>
      <ThemeProvider theme={theme}></ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
