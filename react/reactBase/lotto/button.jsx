import React, { memo } from 'react';

const Button = ({ onClick }) => {
  return (
    <>
    {console.log('button component rendering')}
      <button onClick={onClick}> on more? </button>
    </>
  )
}

export default memo(Button);