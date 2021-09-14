import React, { useState } from "react";
import API from "../../utils/API";
import { Button, Form } from "react-bootstrap";
import "./style.css";
// import axios from "axios";
// import { request } from "express";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validation() {
    return email.length > 0 && password.length > 6;
  }

  function handleSubmit(e) {
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(newUser);
    e.preventDefault();
    API.createUser(newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="text-center SignUp">
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <h3>Sign Up for LINEUP!</h3>
        </Form.Label>

        <Form.Group size="lg" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="emailSignup">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="passwordSignup">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={!validation()}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignupForm;
