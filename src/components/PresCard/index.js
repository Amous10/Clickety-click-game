import React from 'react';
import './presCard.css';

const PresCard = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
        style={
          {
            // backgroundImage: `url('/assets/characters/${props.image}')`
          }
        }
      />
    </div>
  </div>
);

export default PresCard;
