import { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Header from "./pages/Header";

function App() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
