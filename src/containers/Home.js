import React, { useState } from "react";
import "./Home.css";
import MetaTags from 'react-meta-tags';
import LoaderButton from "../components/LoaderButton";

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
              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-12">
                    <h1>Find a match, and climb the boards!</h1>
                  </div>
                  <div class="col-md-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet consectetur purus. Nulla facilisi. Maecenas quis semper quam. In in facilisis ligula. Proin porta efficitur nibh, vel laoreet diam luctus pharetra. Integer eu magna viverra, maximus elit nec, vestibulum augue. Maecenas efficitur eget nulla imperdiet semper. Donec congue eget est ac condimentum. Integer fermentum congue ultrices. Nullam aliquam semper ligula, in finibus tellus luctus a. Pellentesque sollicitudin sapien diam, a feugiat sem elementum at. Proin at ligula maximus, venenatis mauris quis, tincidunt orci. Sed felis purus, euismod at purus vel, sollicitudin mattis odio.</p>
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
                <img className="img-fluid" src="/home.jpg" alt="Landing-Page"/>
              </div>
              <div className="col">
                <h3>Find a match, and climb the boards!</h3>
              </div>
              <div className="col">
                <form onSubmit={handleSubmit}>
                  <LoaderButton type="submit" bsSize="large" isLoading={isLoading}>
                    {isLoading ? "Finding Match" : "Find Match"}
                  </LoaderButton>
                </form>
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