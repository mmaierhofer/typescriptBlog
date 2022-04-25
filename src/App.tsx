import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.png";
import Post from "./pages/Post";

function App() {
  return (
    <div className="h-screen">
      <div className="h-1/6 w-full justify-between items-center flex flex-col pt-5 bg-gray-900">
        <img src={logo} className="h-16" alt="logo" />
        <div className="font-bold text-react-100 text-3xl">
          react-butter.com
        </div>
        <div className="text-white text-sm">
          The bread and butter for your React profession
        </div>
      </div>
      <div className="w-full h-5/6 bg-gray-900">
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
