import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import "./signup.css";

const Signup = () => {
  // const nameRef = useRef();
  const emailRef = useRef();
  // const numberRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmission(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <h1 className="text-center text-capitalize font-weight-bold pt-5 text-primary">
          REGISTER HERE
        </h1>
        {currentUser.email}
        <Form
          onSubmit={handleSubmission}
          className="mx-auto my-5 d-flex flex-column"
          id="formy"
        >
          {error && (
            <Alert className="" variant="danger">
              {error}
            </Alert>
          )}
          {/* <Form.Group id="name">
            <Form.Label className="mt-2">Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              autocomplete="off"
              required
              ref={nameRef}
            />
          </Form.Group> */}

          <Form.Group id="email">
            <Form.Label className="mt-2">Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              autocomplete="off"
              required
              ref={emailRef}
            />
          </Form.Group>
          {/* <Form.Group id="number">
            <Form.Label className="mt-2">Mobile number:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number"
              autocomplete="off"
              required
              ref={numberRef}
            />
          </Form.Group> */}
          <Form.Group id="pwd">
            <Form.Label className="mt-2">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autocomplete="off"
              required
              ref={passwordRef}
            />
          </Form.Group>
          <Form.Group id="pwd">
            <Form.Label className="mt-2">Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              autocomplete="off"
              required
              ref={passwordConfirmRef}
            />
          </Form.Group>
          <Form.Group className=" ml-2 mt-3 ">
            <p>
              Already have an account ?{" "}
              <a href="" className="ml-2 ">
                Log in
              </a>
            </p>
          </Form.Group>
          <Button
            disabled={loading}
            className="btn btn-outline-info w-100 text-white"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
