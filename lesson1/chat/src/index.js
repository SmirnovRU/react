import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Header, PrivateRoute, PublickRoute } from "./components";
import { store } from "./store";
import { firebaseApp } from "./api/firebase";
import { useEffect, useState } from "react";
import {
  ChatPage,
  GistPages,
  ProfilePage,
  LoginPage,
  SignUpPage,
} from "./pages";
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

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session;

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Header session={session} />
          <Routes>
            <Route
              path="/chat/*"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<h1> Home Page</h1>} />
            <Route
              path="/gists"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <GistPages />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublickRoute isAuth={isAuth}>
                  <LoginPage />
                </PublickRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublickRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublickRoute>
              }
            />
            <Route path="/*" element={<h1>Server not found. Error 404</h1>} />
          </Routes>
        </BrowserRouter>
        <ThemeProvider theme={theme}></ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
