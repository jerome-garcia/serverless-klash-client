import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { Auth } from "aws-amplify";
import MetaTags from 'react-meta-tags';


function App(props) {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
      onLoad();
    }, []);

    async function onLoad() {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
      }
      catch(e) {
        if (e !== 'No current user') {
          alert(e);
        }
      }

      setIsAuthenticating(false);
    }

    async function handleLogout() {
      await Auth.signOut();

      userHasAuthenticated(false);

      props.history.push("/login");
    }

    return (
      !isAuthenticating &&
      <div className="App container">
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img class="img-fluid" src="logo.jpg"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/help">
              <NavItem>Help</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/leaderboards">
              <NavItem>Boards</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
          {isAuthenticated
            ? <NavItem onClick={handleLogout}>Logout</NavItem>
            : <>
              <LinkContainer to="/signup">
                 <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </>
          }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </div>
    );
}

export default withRouter(App);