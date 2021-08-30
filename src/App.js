import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Components/Navbar";
import People from "./Components/People";
import Planets from "./Components/Planets";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Star wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === "planets" ? <Planets /> : <People />}
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
