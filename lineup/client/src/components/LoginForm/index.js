import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validation() {
    return email.length > 0 && password.length > 6;
  }

  function handleSubmit(e) {
    const login = {
      username: email,
      password: password,
    };
    console.log(login);
    e.preventDefault();
    API.loginForm(login)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
        <Button block size="md" type="submit" disabled={!validation()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
