import React from 'react';
import './NewCardButton.css';

const NewCardButton = (props) => 
  <button className="new-card-button" onClick={props.showNewCard}>NewCardButton</button>

export default NewCardButton;