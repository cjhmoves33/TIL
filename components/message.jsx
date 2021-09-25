import React, { memo } from 'react';

const Message = () => {
  return (
    <>
      <div className="message">STUDY HARD!</div>
      <div className="message">BE PATIENT!</div>
      <div className="message">STEP BY STEP!</div>
    </>
  )
}

export default memo(Message);