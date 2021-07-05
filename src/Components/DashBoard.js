import React, { useState } from "react";
import { Button, Card, Alert, Container, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const DashBoard = () => {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Container>
        <h1 className="text-center text-capitalize font-weight-bold pt-5 text-primary">
          USER PROFILE
        </h1>

        <Form className="mx-auto my-5 d-flex flex-column" id="formy">
          <Form.Group id="email">
            <Form.Label className="mt-2 text-center"></Form.Label>
            {""}
            <h5> Email address: {currentUser && currentUser.email}</h5>
          </Form.Group>

          <Button
            className="btn btn-outline-info w-100 text-white mt-3"
            type="submit"
          >
            Update profile
          </Button>
        </Form>
      </Container>

      <div className="w-100 text-center mt-2">
        {currentUser && (
          <Button to="/" onClick={handleLogout} variant="link">
            Logout
          </Button>
        )}
      </div>
    </>
  );
};

export default DashBoard;
