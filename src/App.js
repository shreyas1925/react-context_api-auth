import React from "react";
import Signup from "./Components/Signup";
import { Container, Navbar } from "react-bootstrap";
import Login from "./Components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import { useAuth } from "./contexts/AuthContext";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <AuthProvider>
        <NavBar />
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
                <PrivateRoute exact path="/">
                  <DashBoard />
                </PrivateRoute>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/forgot">
                  <ForgotPassword />
                </Route>
                <Route path="/update">
                  <UpdateProfile />
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

// import React, { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [state, setstate] = useState([]);

//   useEffect(() => {
//     const api = async () => {
//       const res = await fetch("https://api.publicapis.org/entries");
//       const data = await res.json();

//       setstate(data.entries);

//       // testing
//       {
//         state.map((element) => {
//           console.log(element.API);
//         });
//       }
//     };

//     api();
//   }, []);

//   return (
//     <>
//       {state.map((element) => (
//         // console.log(element.API);
//         <p>{element.API}</p>
//       ))}
//     </>
//   );
// };

// export default App;
