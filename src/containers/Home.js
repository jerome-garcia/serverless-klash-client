import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <div class="media">
            <span class="media-body">
                <h3 class="media-heading">Meta Leagues</h3>
                <h1>Find a match, and climb the boards</h1>
                <button type="button" class="btn btn-dark btn-lg">Find Match</button>
            </span>
            <div class="media-left">
                <img class="img-fluid" src="/home.jpg" alt="Responsive Image"/>
            </div>
        </div>
      </div>
    </div>
  );
}