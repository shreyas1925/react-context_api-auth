import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./signup.css";
import { useHistory } from "react-router";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { updateEmail, updatePassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmission(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Container>
        <h1 className="text-center text-capitalize font-weight-bold pt-5 text-primary">
          UPLOAD PROFILE
        </h1>

        <Form
          onSubmit={handleSubmission}
          className="mx-auto my-5 d-flex flex-column"
          id="formy"
        >
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group id="email">
            <Form.Label className="mt-2">Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              autocomplete="off"
              required
              ref={emailRef}
              defaultValue={currentUser && currentUser.email}
            />
          </Form.Group>

          <Form.Group id="pwd">
            <Form.Label className="mt-2">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autocomplete="off"
              ref={passwordRef}
              placeholder="Leave blank to keep it unchanged"
            />
          </Form.Group>
          <Form.Group id="pwd">
            <Form.Label className="mt-2"> Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autocomplete="off"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep it unchanged"
            />
          </Form.Group>

          <Button
            disabled={loading}
            className="btn btn-outline-info w-100 mt-3 text-white"
            type="submit"
          >
            Update
          </Button>
          <Form.Group className=" ml-2 mt-3 text-center">
            <Link to="/" variant="link">
              Cancel
            </Link>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default UpdateProfile;
