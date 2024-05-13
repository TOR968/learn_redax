import React from "react";
import Counter from "../Counter/Counter";
import "../index.css";

// App component is the main entry point of your application.

const App = () => {
  return (
    // The App component renders a container div that holds the Counter component.
    <div className="container">
      <Counter />
    </div>
  );
};

export default App;
