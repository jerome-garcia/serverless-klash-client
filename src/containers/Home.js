import React from "react";
import "./Home.css";
import MetaTags from 'react-meta-tags';

export default function Home(props) {

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
                <img class="img-fluid" src="/home.jpg" alt="Landing-Page"/>
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
              <div className="col">
                <h1>Meta League</h1> 
              </div>
              <br/>
              <div className="col">
                <img className="img-fluid" src="/home.jpg" alt="Landing-Page"/>
              </div>
              <div className="col">
                <h3>Find a match, and climb the boards!</h3>
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary">Find Match</button>
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