import React, { useContext, useCallback, memo , useMemo} from 'react';
import { TableContext, CODE, OPEN_CELL, CLICK_MINE, QUESTION_CELL, FLAG_CELL, NORMALIZE_CELL } from '../mineSearch';

const getStyle = (code) => {
  switch(code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };

    case CODE.OPENED:
    case code <= 1:
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
  console.log('get td text')
  switch(code) {
    case CODE.NORMAL:
    case CODE.OPENED:
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
      return code;
  }
}

const Td = ({ row, col }) => {

  const { tableData, dispatch, gameOver, result } = useContext(TableContext);
  const thisCell = tableData[row][col];

  const onClickTd = useCallback( () => {
    if( gameOver || result ) { return; }

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
  }, [thisCell, gameOver, result])

  const onRightClickTd = useCallback( (e) => {
    e.preventDefault();
    if( gameOver || result ) { return; }

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
  }, [thisCell, gameOver, result])

  console.log('td rendering');
  return useMemo( () => (   
    <td
    style={getStyle(thisCell)}
    onClick={onClickTd}
    onContextMenu={onRightClickTd}
    >{getTdText(thisCell)}</td>
  ), [thisCell])
}

export default memo(Td);