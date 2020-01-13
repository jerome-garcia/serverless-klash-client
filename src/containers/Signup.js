import React, { useState } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./Signup.css";
import { Auth } from "aws-amplify";

export default function Signup(props) {
  const [fields, handleFieldChange] = useFormFields({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.firstName.length > 0 &&
      fields.lastName.length > 0 &&
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

async function handleSubmit(event) {
  event.preventDefault();

  setIsLoading(true);

  try {
    const newUser = await Auth.signUp({
      username: fields.email,
      password: fields.password,
      attributes: {
        'custom:firstname': fields.firstName,
        'custom:lastname': fields.lastName
	  }

    });
    setIsLoading(false);
    setNewUser(newUser);
  } catch (e) {
    alert(e.message);
    setIsLoading(false);
  }
}

async function handleConfirmationSubmit(event) {
  event.preventDefault();

  setIsLoading(true);

  try {
    await Auth.confirmSignUp(fields.email, fields.confirmationCode);
    await Auth.signIn(fields.email, fields.password);

    props.userHasAuthenticated(true);
    props.history.push("/");
  } catch (e) {
    alert(e.message);
    setIsLoading(false);
  }
}

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </LoaderButton>
      </form>
    );
  }

  function renderForm() {
    return (
      <div class="container">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-md-6">
                <FormGroup controlId="firstName" bsSize="large">
                  <ControlLabel>First Name</ControlLabel>
                  <FormControl
                    autoFocus
                    type="name"
                    value={fields.firstName}
                    onChange={handleFieldChange}
                  />
                </FormGroup>
              </div>
              <div class="col-md-6">
                <FormGroup controlId="lastName" bsSize="large">
                  <ControlLabel>Last Name</ControlLabel>
                  <FormControl
                    autoFocus
                    type="name"
                    value={fields.lastName}
                    onChange={handleFieldChange}
                  />
                </FormGroup>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={fields.email}
                      onChange={handleFieldChange}
                    />
                </FormGroup>
              </div>
            </div>
            <div class="row">
              <div class ="col-md-12">
                <FormGroup controlId="password" bsSize="large">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    type="password"
                    value={fields.password}
                    onChange={handleFieldChange}
                  />
                </FormGroup>
              </div>
            </div>
            <div class="row">
              <div class ="col-md-12">
                <FormGroup controlId="confirmPassword" bsSize="large">
                  <ControlLabel>Confirm Password</ControlLabel>
                  <FormControl
                    type="password"
                    onChange={handleFieldChange}
                    value={fields.confirmPassword}
                  />
                </FormGroup>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p class="text-center">By clicking sign up, you agree to Meta's <strong>User Agreement</strong>.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <LoaderButton
                  block
                  type="submit"
                  bsSize="large"
                  isLoading={isLoading}
                  disabled={!validateForm()}
                >
                  Signup
                </LoaderButton>
              </div>
            </div>
          </form>
      </div>
    );
  }

  return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}