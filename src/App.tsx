import React from "react";

import { UseVwProvider } from "./contexts/useViewportWidth";
import Home from "./Views/Home";

function App() {
  return (
    <UseVwProvider>
      <Home />
    </UseVwProvider>
  );
}

export default App;
