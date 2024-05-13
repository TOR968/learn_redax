import React from "react";
import Form from "../Form/Form";
import ShipList from "../ShipList/ShipList";
import "../index.css";

const App = () => {
  return (
    <div className="container">
      <Form />
      <ShipList />
    </div>
  );
};

export default App;