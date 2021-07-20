import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validation() {
    return email.length > 0 && password.length > 6;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="text-center Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validation()}>
          Login
        </Button>
        <p className="forgot-password text-right">
          Sign up <a href="/signup">here</a>!
        </p>
      </Form>
    </div>
  );
}

export default LoginForm;
