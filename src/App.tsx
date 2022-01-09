import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.png";
import Post from "./pages/Post";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="h-1/6 w-full justify-center items-center flex flex-col pt-5">
        <img src={logo} className="h-20" alt="logo" />
        <div className="font-bold text-react-100 text-3xl">
          react-butter.com
        </div>
      </div>
      <div className="w-full h-5/6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="post/:slug" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
