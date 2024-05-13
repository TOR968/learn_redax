import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeShip } from "../redux/actions/shipAction";

const ShipList = () => {
  const ships = useSelector((state) => state.ships);
  const dispatch = useDispatch();

  const handleRemoveShip = (ship) => {
    dispatch(removeShip(ship));
  };

  return (
    <div>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id}>
            <h2>
              <span>Name:</span> {ship.name}
            </h2>
            <p>
              <span>Type:</span> {ship.type}
            </p>
            <button onClick={() => handleRemoveShip(ship)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
