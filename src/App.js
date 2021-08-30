import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import People from "./Components/People";
import Planets from "./Components/Planets";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
