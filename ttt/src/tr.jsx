import React, { memo } from 'react';
import Td from './td'

const Tr = ({ rowIdx, rowData, dispatch, winner }) => {
  console.log('rendering', rowIdx);
  return (
    <tr >
      {Array(rowData.length).fill().map( (td, idx) => <Td key={idx} dispatch={dispatch} rowIdx={rowIdx} cellIdx={idx} cellData={rowData[idx]} winner={winner} /> )}
    </tr>
  )
}

export default memo(Tr);