// App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import { cones } from "./data/Cone";

function App() {
  const [selectedCone, setSelectedCone] = useState(cones[3]);
  console.log("Selected cone bgColor: ", selectedCone.bgColor);

  return (
    <div style={{ background: selectedCone.bgColor, minHeight: "100vh" }}>
     <Navbar bgColor={selectedCone.bgColor} />
      <Hero selectedCone={selectedCone} setSelectedCone={setSelectedCone} />
    </div>
  );
}

export default App;
