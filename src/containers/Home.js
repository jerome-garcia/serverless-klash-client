import React, { useState, useEffect } from "react";
import { PageHeader } from "react-bootstrap";
import "./Home.css";
import MetaTags from 'react-meta-tags';

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(true);

  function renderLander() {
      return (
        <div className="Home">
          <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </MetaTags>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-12">
                    <h3>Meta League</h3>
                    <h1>Find a match, and climb the boards!</h1>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <img class="img-fluid" src="/home.jpg"/>
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
        <div class="container">
            <div class="row">
              <div class="col">
                <h1>Meta League</h1> 
              </div>
              <br/>
              <div class="col">
                <img class="img-fluid" src="/home.jpg"/>
              </div>
              <div class="col">
                <h3>Find a match, and climb the boards!</h3>
              </div>
              <div class="col">
                <button type="button" class="btn btn-secondary">Find Match</button>
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