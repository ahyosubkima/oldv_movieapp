import React from "react";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie-detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
