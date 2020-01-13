import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import "./Leaderboards.css";
import { API } from "aws-amplify";

export default function Leaderboards(props) {
  const [leaderboards, setleaderboards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!props.isAuthenticated) {
        return;
      }

      try {
        const leaderboards = await loadLeaderboards();
        setleaderboards(leaderboards);
      } catch (e) {
        alert(e);
      }

    setIsLoading(false);
    }

    onLoad();
  }, [props.isAuthenticated]);

  function loadLeaderboards() {
    return API.get("leaderboards", "/leaderboards");
  }

  function renderLeaderBoardsList(leaderboards) {
    return leaderboards.map((user, i) =>
      (
      <tr key={user.userId}>
        {
          <td>{user.ranking}</td>
        }
        {
          <td>{user.name}</td>
        }
        {
          <td>{user.points}</td>
        }
      </tr>
      )
    );
  }

  function renderLeaderBoards() {
    return <tbody>{!isLoading && renderLeaderBoardsList(leaderboards)}</tbody>
;
  }

  return (
    <div className="Leaderboards">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Leaderboards</h1>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            <table className="leaderboards">
              <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </thead>
            { renderLeaderBoards() }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}