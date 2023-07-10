import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalCSS } from "./styles/GlobalCSS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./styles/Share";
import Nav from "./components/Nav";

const theme = {
  color: {
    primary: "aliceblue",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={ <Nav />}></Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
