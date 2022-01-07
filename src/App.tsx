import React from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="h-1/5 w-full"></div>
      <div className="w-full h-4/5">
        <Home />
      </div>
    </div>
  );
}

export default App;
