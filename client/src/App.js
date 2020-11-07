import React from "react";
import { Container } from "react-bootstrap";
import Register from "./Components/Register";

import "./App.scss";

function App() {
  return (
    <Container className="pt-5">
      <Register />
    </Container>
  );
}

export default App;
