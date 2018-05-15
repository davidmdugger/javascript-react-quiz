import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <div className="card-question">
            {props.question}
          </div>
        </div>
        <div className="card-back">
          <div className="card-answer">
            {props.answer}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;