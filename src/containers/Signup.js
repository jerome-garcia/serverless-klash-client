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
import MetaTags from 'react-meta-tags';
import { API } from "aws-amplify";

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
    setNewUser(newUser);
    setIsLoading(false);
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

    await addUser({
      name: fields.firstName + " " + fields.lastName,
      hashGSI: "USER",
      points: 0
    });

    props.history.push("/");
  } catch (e) {
    alert(e.message);
    setIsLoading(false);
  }
}

 function addUser(user) {
   return API.post("leaderboards", "/leaderboards", {
     body: user
   });
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
      <div className="container">
          <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </MetaTags>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
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
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-12">
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
            <div className="row">
              <div className ="col-md-12">
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
            <div className="row">
              <div className ="col-md-12">
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
            <div className="row">
              <div className="col-md-12">
                <p className="text-center">By clicking sign up, you agree to Meta's <a href=""><strong>User Agreement</strong></a>.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
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
            <br/>
            <br/>
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