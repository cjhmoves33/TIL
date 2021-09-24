import React, { useContext, memo } from 'react';
import { TableContext, CODE } from '../mineSearch';

const getStyle = (code) => {
  switch(code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.OPENED:
      return {
        background: 'white',
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
    default:
      return '';
  }
}

const Td = ({ row, col }) => {
  console.log('render')
  const { tableData } = useContext(TableContext);

  return (
    <td
    style={getStyle(tableData[row][col])}
    >{getTdText(tableData[row][col])}</td>
  )
}

export default memo(Td);