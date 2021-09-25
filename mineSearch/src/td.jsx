import React, { useContext, useCallback, memo } from 'react';
import { TableContext, CODE, OPEN_CELL, CLICK_MINE, QUESTION_CELL, FLAG_CELL, NORMALIZE_CELL } from '../mineSearch';

const getStyle = (code) => {
  switch(code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };

    case CODE.OPENED:
    case CODE.CLICKED_MINE:
      return {
        background: 'white',
      };

    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: 'red',
      };

    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: 'yellow',
      };

    default:
      return {
        background: 'white',
      }
  }
};

const getTdText = (code) => {
  switch(code) {
    case CODE.NORMAL:
      return '';

    case CODE.MINE:
      return 'X';

    case CODE.CLICKED_MINE:
      return '💥';

    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '!';

    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return '?';
      
    default:
      return '';
  }
}

const Td = ({ row, col }) => {

  const { tableData, dispatch, gameOver } = useContext(TableContext);
  const thisCell = tableData[row][col];

  const onClickTd = useCallback( () => {
    if( gameOver ) { return; }

    switch (thisCell) {
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row, col});
        return ;

      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row, col});
        return ;

      default:
        return ;
    }
  }, [thisCell, gameOver])

  const onRightClickTd = useCallback( (e) => {
    e.preventDefault();
    if( gameOver ) { return; }

    switch (thisCell) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({ type: FLAG_CELL, row, col});
        return ;

      case CODE.FLAG_MINE:
      case CODE.FLAG:
        dispatch({ type: QUESTION_CELL, row, col});
        return ;

      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        dispatch({ type: NORMALIZE_CELL, row, col});
        return ;

      default:
        return ;
    }
  }, [thisCell, gameOver])

  return (
    <td
    style={getStyle(thisCell)}
    onClick={onClickTd}
    onContextMenu={onRightClickTd}
    >{getTdText(thisCell)}</td>
  )
}

export default memo(Td);