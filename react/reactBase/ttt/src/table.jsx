import React, { memo } from 'react';
import Tr from './tr'

const Table = ({ tableData, dispatch, winner }) => {
  console.log('rendering');
  return (
    <table >
      <tbody>
        {Array(tableData.length).fill().map( (tr, idx) => <Tr key={idx} dispatch={dispatch} rowIdx={idx} rowData={tableData[idx]} winner={winner} />)}
      </tbody>
    </table>
  )
}

export default Table;