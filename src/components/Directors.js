import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}> {/* Add a unique key prop */}
          <h3>Name: {director.name}</h3>
          <ul>
            {director.movies.map((movie, index) => (
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

export default Directors;
