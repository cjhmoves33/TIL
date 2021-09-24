import React, { useReducer, createContext, useMemo } from 'react';
import Table from './src/table';
import Form from './src/form';

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

export const TableContext = createContext();

const initialState = {
  tableData: [],
  timer: 0,
  result: ''
};

const plantMine = (row, col, mine) => {
  const candidate = Array(row * col).fill().map( (empty, idx) => idx );
  const shuffle = [];
  while(candidate.length > row * col - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    shuffle.push(chosen);
  }

  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData= [];
    data.push(rowData);
    for (let j = 0; j < col; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for(let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / col);
    const hor = shuffle[k] % col;
    data[ver][hor] = CODE.MINE;
  }

  return data;
};

export const START_GAME = 'START_GAME';

const reducer = (state, action) => {
  switch(action.type) {
    case START_GAME: 
      return {
        ...state,
        tableData: plantMine(action.row, action.col, action.quantityOfMine)
      }
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ tableData: state.tableData, dispatch }), [state.tableData]);

  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  )
}

export default MineSearch;