import React, { memo } from 'react';

const ResetButton = memo(({ reset }) => {
  return(
    <button onClick={reset}>reset</button>
  )
})

export default ResetButton;