import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>Meta Leagues</h3>
            <h1>Find a match, and climb the boards</h1>
          </div>
          <div class="col-md-6">
            <img class="img-fluid" src="/home.jpg"/>
          </div>
        </div>
      </div>
    </div>
  );
}