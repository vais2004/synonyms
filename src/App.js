import React, { useState } from "react";
import "./styles.css";

var synonymsDictionary = {
  happy: "Euphoric😃",
  sad: "distressing☹😞",
  angry: "displeased😡",
  good: "fine😇",
  brave: "bold😎",
  intelligent: "Clever🧐",
  afraid: "scared😱",
  rude: "impolite😒",
  silent: "quite🤫"
};

var synonymsWeKnow = Object.keys(synonymsDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function synonymsInputHandler(event) {
    var userInput = event.target.value;

    var meaning = synonymsDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function synonymsClickHandler(synonyms) {
    console.log(synonyms);
  }

  return (
    <div className="App">
      <h1> 💎synonyms of diff moods!💎 </h1>

      <input onChange={synonymsInputHandler} />

      <h2> {meaning} </h2>

      <h3> special we know</h3>
      {synonymsWeKnow.map(function (synonyms) {
        return (
          <span
            onClick={() => synonymsClickHandler(synonyms)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={synonyms}
          >
            {synonyms}
          </span>
        );
      })}
    </div>
  );
}
