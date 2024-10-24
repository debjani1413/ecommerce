import React from 'react';

const Button = ({text,icon}) => {
  return (
    <button className="button">
    {text}
    {icon && <span className="button-icon">{icon}</span>}
  </button>
  )
}

export default Button;
