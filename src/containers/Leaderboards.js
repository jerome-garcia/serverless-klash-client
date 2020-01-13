import React, { useState, useEffect } from "react"
import "./Leaderboards.css";
import { PageHeader, ListGroup } from "react-bootstrap";

export default function Leaderboards() {
   const [boards, setboards] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

  function renderBoardsList(notes) {
    return null;
  }
    return (
      <div className="leaderboards">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!isLoading && renderBoardsList(boards)}
        </ListGroup>
      </div>
    );
}