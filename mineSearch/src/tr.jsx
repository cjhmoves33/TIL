import React, { useContext, memo } from 'react';
import Td from './td';
import { TableContext } from '../mineSearch';

const Tr = ({ row }) => {
  const { tableData } = useContext(TableContext);

  return (
   <tr>
     {Array(tableData[0].length).fill().map( (td, i) => <Td key={i} row={row} col={i} />)}
   </tr> 
  )
}

export default memo(Tr);