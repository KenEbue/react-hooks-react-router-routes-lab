import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}> {/* Add a unique key prop */}
          <h3>Name: {actor.name}</h3>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}> {/* Use index as key for movies list */}
                {movie}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
