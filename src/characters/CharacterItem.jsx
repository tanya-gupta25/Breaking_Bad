import React from "react";

const CharacterItem = ({ itemss }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={itemss.img}></img>
        </div>
        <div className="card-back">
          <h1>{itemss.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong>
              {itemss.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong>
              {itemss.nickname}
            </li>
            <li>
              <strong>Birthday:</strong>
              {itemss.birthday}
            </li>
            <li>
              <strong>Status:</strong>
              {itemss.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
