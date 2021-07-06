import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./signup.css";
import { useHistory } from "react-router";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmission(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to login");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <h1 className="text-center text-capitalize font-weight-bold pt-5 text-primary">
          LOGIN HERE
        </h1>

        <Form
          onSubmit={handleSubmission}
          className="mx-auto my-5 d-flex flex-column"
          id="formy"
        >
          {error ? (
            <Alert className="" variant="danger">
              {error}
            </Alert>
          ) : null}

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

          <Form.Group className=" ml-2 mt-3 ">
            <p>
              Are you a new user ?{" "}
              <Link to="/signup" className="ml-2 ">
                Register
              </Link>
            </p>
            <p>
              Forgot password ?{" "}
              <Link to="/forgot" className="ml-2 ">
                Click here
              </Link>
            </p>
          </Form.Group>
          <Button
            disabled={loading}
            className="btn  w-100 text-white"
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
