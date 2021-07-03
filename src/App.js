import React from "react";
import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column w-100">
          <Signup />
          <Login />
        </div>
      </Container>
    </>
  );
};

export default App;
