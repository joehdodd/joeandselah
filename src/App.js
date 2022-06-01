import * as React from "react";
import ImageGrid from "./components/ImageGrid";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="app-wrapper">
        <ImageGrid />
      </div>
    </>
  );
}

export default App;
