import React, { useState } from "react";
import API from "../../utils/API";
import { Button, Form } from "react-bootstrap";
import "../../components/SignupForm/style.css";
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
    "firstName" : firstName, 
    "lastName" : lastName, 
    "email" : email, 
    "password" : password}
    console.log(newUser)
    e.preventDefault();
    API.createUser(newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <div className="SignUp">
      <Form onSubmit={handleSubmit}>
        <Form.Label>Sign Up</Form.Label>

        <Form.Group size="lg" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            autoFocus
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            autoFocus
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email address</Form.Label>
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
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Sign in</a>!
        </p>
      </Form>
    </div>
  );
}

export default SignupForm;
