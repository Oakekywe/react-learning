import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalCSS } from "./styles/GlobalCSS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./styles/Share";
import Home from "./components/Home";

const theme = {
  colors: {
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
            <Route path="/" element={ <Home />}></Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
