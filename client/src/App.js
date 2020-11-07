import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./App.scss";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Register</h1>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="success" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
