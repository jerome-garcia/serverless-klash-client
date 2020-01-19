import React, { useState } from "react";
import "./Home.css";
import MetaTags from 'react-meta-tags';
import LoaderButton from "../components/LoaderButton";
import { LinkContainer } from "react-router-bootstrap";

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await sleep(5000);
      setIsLoading(false);
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  function renderLander() {
      return (
        <div className="Home">
          <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </MetaTags>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-push-4">
                <img class="img-fluid" src="/home.jpg" alt="Landing-Page"/>
              </div>
              <div class="col-md-4 col-md-pull-8">
                <div class="row">
                  <br/>
                  <div class="col-md-12">
                    <h1>Find a match and climb the boards!</h1>
                  </div>
                  <div class="col-md-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis, tinciattis odio.</p>
                    <br/>
                  </div>  
                  <div class="col-md-12">
                    <LinkContainer to="/login">
                      <LoaderButton block type="submit" bsSize="large" isLoading={isLoading}>
                        Log In
                      </LoaderButton>
                    </LinkContainer>
                  </div>
                  <div class="col-md-12">
                    <h4>Don't have an account? Click here to <a href="/signup">sign up.</a></h4>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }

  function renderLogInLander() {
    return (
      <div className="Home-logged-in">
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>
        <div className="container">
            <div className="row">
              <div class="col-md-12">
                <div className="col">
                  <img className="img-fluid" src="/home.jpg" alt="Landing-Page"/>
                </div>
              </div>
              <div class="col-md-12">
                  <div class="col">
                    <h1>Find a match and climb the boards!</h1>
                  </div>
                  <div class="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis, tinciattis odio.</p>
                  </div> 
                  <br/>
                  <div className="col">
                    <form onSubmit={handleSubmit}>
                      <LoaderButton type="submit" bsSize="large" isLoading={isLoading}>
                        {isLoading ? "Finding Match" : "Find Match"}
                      </LoaderButton>
                    </form>
                  </div>
              </div>
              <br/>
              <br/>
            </div>
          </div>
      </div>
    );
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? renderLogInLander() : renderLander()}
    </div>
  );
}