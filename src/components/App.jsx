import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
console.log(emojipedia);

function cardDetails(term) {
  return <Entry emoji={term.emoji} name={term.name} meaning={term.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>Emoji Baba</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(cardDetails)}</dl>
    </div>
  );
}

export default App;
