import React from "react";
import { Container } from "react-bootstrap";
import ApolloProvider from "./ApolloProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <Container className="pt-5">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
