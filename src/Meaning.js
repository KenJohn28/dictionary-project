import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          <p>
            <strong>Definition:</strong> {definition.definition}
            <br />
            <strong>Example:</strong>{" "}
            {definition.example && <em>{definition.example}</em>}
          </p>
          {/* Move Synonyms outside of <p> */}
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      ))}
    </div>
  );
}
