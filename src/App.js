import * as React from "react";
import ImageGrid from "./components/ImageGrid";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="app-wrapper">
        <ImageGrid />
        <Info />
      </div>
    </>
  );
}

export default App;
