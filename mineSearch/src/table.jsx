import React, { useContext } from 'react';
import { TableContext } from '../mineSearch';
import Tr from './tr';

import './table.scss'

const Table = () => {
  const { tableData } = useContext(TableContext);
  console.log(tableData)
  return (
   <table>
     <tbody>
       {Array(tableData.length).fill().map( (tr, i) => <Tr key={i} row={i}/>)}
     </tbody>
   </table> 
  )
}

export default Table;