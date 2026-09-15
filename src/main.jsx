import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Cheapents</h1>
      <p>Find affordable apartments under $1,500.</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);