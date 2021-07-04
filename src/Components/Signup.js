import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./signup.css";
import { useHistory } from "react-router";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmission(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create Account");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <h1 className="text-center text-capitalize font-weight-bold pt-5 text-primary">
          REGISTER HERE
        </h1>
        {/* {currentUser.email} */}
        <Form
          onSubmit={handleSubmission}
          className="mx-auto my-5 d-flex flex-column"
          id="formy"
        >
          {error ? (
            <Alert className="" variant="danger">
              {error}
            </Alert>
          ) : // <Alert className="" variant="success">
          //   {/* Account Registered Successfully */}
          // </Alert>
          null}
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
            <Form.Label className="mt-2">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autocomplete="off"
              required
              ref={passwordConfirmRef}
            />
          </Form.Group>

          <Form.Group className=" ml-2 mt-3 ">
            <p>
              Already have an acoount ?{" "}
              <Link to="/login" className="ml-2 ">
                Log in
              </Link>
            </p>
          </Form.Group>
          <Button
            disabled={loading}
            className="btn btn-outline-info w-100 text-white"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
