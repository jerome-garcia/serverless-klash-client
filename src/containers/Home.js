import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-12">
                <h3>Meta Leagues</h3>
                <h1>Find a match, and climb the boards</h1>
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