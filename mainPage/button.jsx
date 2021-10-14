import React from 'react';
import './button.scss';

const Button = ({ name }) => {

  return (
    <button className='buttons'>
      {name}
    </button>
  )
}

export default Button;