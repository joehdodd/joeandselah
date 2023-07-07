import * as React from "react";
import ImageGrid from "./components/ImageGrid";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="app-wrapper">
        <Info />
        <hr />
        <ImageGrid />
      </div>
    </>
  );
}

export default App;
