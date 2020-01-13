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
                    <h3>Meta Leagues</h3>
                    <h1>Find a match, and climb the boards!</h1>
                  </div>
                  <div class="col-md-12">
                    <button type="button" class="btn btn-secondary">Find Match</button>
                  </div>
                  <br/>
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
        <PageHeader>Your Notes</PageHeader>
      </div>
    );
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? renderLogInLander() : renderLander()}
    </div>
  );
}