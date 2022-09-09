import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleVideo from "./pages/SingleVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<SingleVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
