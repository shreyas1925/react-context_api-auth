import React, { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  async function handleSubmission(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your mail for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <h1 className="text-center text-capitalize font-weight-bold pt-5 text-dark">
          Password Reset
        </h1>

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
          {message && (
            <Alert className="" variant="success">
              {message}
            </Alert>
          )}
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
          <br />
          <Button
            disabled={loading}
            className="btn  w-100 text-white mt-3"
            type="submit"
            className="btn btn-info"
          >
            Password Reset
          </Button>
          <Form.Group className=" ml-2 mt-3 d-flex">
            <p>
              Are you a new user ?{" "}
              <Link to="/signup" className="ml-2  ">
                Register
              </Link>
            </p>
            <p>
              Already an user ?{" "}
              <Link to="/forgot" className="ml-2 ">
                Login
              </Link>
            </p>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default ForgotPassword;
