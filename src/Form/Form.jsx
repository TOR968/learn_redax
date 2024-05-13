import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addShip } from "../redux/actions/shipAction";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("Container");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addShip({
        id: Date.now(),
        name: name,
        type: type,
      })
    );
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "type":
        setType(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setType("Container");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Ship Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="type">Ship Type</label>
        <select id="type" name="type" onChange={handleChange} value={type}>
          <option value="Container">Container</option>
          <option value="Bulk">Bulk</option>
          <option value="Tanker">Tanker</option>
        </select>
        <button>Add Ship</button>
      </form>
    </div>
  );
};

export default Form;
