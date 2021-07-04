import React from "react";
import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";
import Login from "./Components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
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
            <Router>
              <Switch>
                <Route exact path="/">
                  <DashBoard />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </Router>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
};

export default App;
