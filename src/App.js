import React from "react";
import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";
import Login from "./Components/Login";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="d-flex flex-column w-100"
            style={{ minWidth: "400px" }}
          >
            <Signup />
            {/* <Login /> */}
          </div>
        </Container>
      </AuthProvider>
    </>
  );
};

export default App;
