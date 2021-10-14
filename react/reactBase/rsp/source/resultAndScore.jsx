import React, { memo } from 'react'

const ResultAndScore = memo(({ result, score }) => {
  console.log('render child')
  return (
    <>
      <div>result: {result}</div>
      <div>score: {score}</div>
    </>
  )
});

export default ResultAndScore;