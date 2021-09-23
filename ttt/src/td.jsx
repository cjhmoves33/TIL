import React, { useCallback, memo } from 'react';
import { CLICK_CELL, CHANGE_TURN } from '../ttt';

const Td = ({ rowIdx, cellIdx, cellData, dispatch, winner }) => {
  console.log('rendering', rowIdx, cellIdx);
  const onClickTd = useCallback(() => {
    if(winner || cellData){return;}
    console.log(winner)
    dispatch({ type: CLICK_CELL, row: rowIdx, col: cellIdx });
  }, [cellData, winner])

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
}

export default memo(Td);