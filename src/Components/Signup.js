import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <Container>
        <h1 className="text-center text-capitalize font-weight-bold pt-5 text-primary">
          REGISTER HERE
        </h1>
        <hr className="w-50 mx-auto " />

        <Form className="mx-auto my-5 d-flex flex-column" id="formy">
          <Form.Group id="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              autocomplete="off"
              required
            />
          </Form.Group>
          <Form.Group id="email">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              autocomplete="off"
              required
            />
          </Form.Group>
          <Form.Group id="number">
            <Form.Label>Mobile number:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number"
              autocomplete="off"
              required
            />
          </Form.Group>
          <Form.Group id="pwd">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autocomplete="off"
              required
            />
          </Form.Group>
          <Form.Group id="pwd">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              autocomplete="off"
              required
            />
          </Form.Group>
          <Form.Group className=" ml-2 mt-3 ">
            <p>
              Already have an account ?{" "}
              <a href="" className="ml-2 ">
                Log in
              </a>
            </p>
          </Form.Group>
          <Button className="btn btn-outline-info w-100 text-white">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
