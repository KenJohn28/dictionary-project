import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          <p>
            {definition.definition}

            <br />
            {definition.example && <em>{definition.example}</em>}
          </p>
        </div>
      ))}
    </div>
  );
}
