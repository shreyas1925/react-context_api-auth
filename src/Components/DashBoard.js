import React, { useState } from "react";
import { Button, Card, Alert, Container, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./DashBoard.css";
import profile_image from "./dash_profile.png";

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
      {currentUser && (
        <Button to="/" onClick={handleLogout} variant="link">
          Logout
        </Button>
      )}
      <Container>
        {
          <main>
            <div className="image">
              <img src={profile_image} alt="image_profile" />
            </div>

            {currentUser ? (
              <div className="second">
                <h1>Welcome user 👏</h1>
                <p>
                  A web app made with react firebase with context api for state
                  management which authenticates the user and provide the token
                  through which he can performs various options.This template
                  will be further used and code will be github anyone can make
                  use of this for their project .
                </p>
                <Form className="" id="formy">
                  <Form.Group id="email">
                    <Form.Label className="mt-2 text-center"></Form.Label>
                    {""}
                    <h5> Email address: {currentUser && currentUser.email}</h5>
                  </Form.Group>

                  <Link
                    className="btn btn-info w-100 text-white mt-3"
                    type="submit"
                    to="/update"
                  >
                    Update profile
                  </Link>
                </Form>
              </div>
            ) : (
              <div className="second ml-5">
                <h1>Welcome user 👏</h1>
                <p>
                  A web app made with react firebase with context api for state
                  management which authenticates the user and provide the token
                  through which he can performs various options.This template
                  will be further used and code will be github anyone can make
                  use of this for their project .
                </p>
                <Button className="btn btn-info w-75 button mb-3  ">
                  <Link to="/signup" className="ml-2 link">
                    Register
                  </Link>
                </Button>
              </div>
            )}
          </main>
        }
      </Container>
    </>
  );
};

export default DashBoard;
