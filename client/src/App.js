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
