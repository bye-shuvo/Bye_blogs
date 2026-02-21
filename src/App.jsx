import React from "react";
import "./App.css";
import Home from "./Components/Home";

const title = "Blog Post";

const App = () => {
  return (
    <div className="App">
      <h1>{title}</h1>
      <Home />
    </div>
  );
};

export default App;
