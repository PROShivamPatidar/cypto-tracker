import React from 'react';
import './style.css';

function Button({ text, onClick,outlined }) {
  return (
    <div>
      <button className={outlined ? "outlined-btn" : "btn"} onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
