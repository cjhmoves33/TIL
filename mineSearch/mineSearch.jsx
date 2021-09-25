import React, { useEffect, useReducer, createContext, useMemo } from 'react';
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

const initialState = {
  tableData: [],
  timer: 0,
  result: false,
  gameOver: true,
  openedCount: 0,
  complete: 0,
  checked: []
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
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

const reducer = (state, action) => {
  const { openedCount, complete, checked, timer } = state;
  const { type, row, col, quantityOfMine } = action;
  const tableData = [...state.tableData];

  switch(type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(row, col, quantityOfMine),
        timer: 0,
        result: '',
        gameOver: false,
        openedCount: 0,
        complete: row * col - quantityOfMine,
        checked: []
      }
    case OPEN_CELL: {
      tableData.forEach( (row, idx) => tableData[idx] = [...state.tableData[idx]] );
      let check = [...checked];
      let counter = openedCount;

      const checkAround = (row, col) => {
        if ( !(tableData[row] && tableData[col]) ) { return; }
        if ( check.includes(`${row},${col}`) ) { return; }
        check.push(`${row},${col}`);
        counter++;

        const around = [];
        if (tableData[row - 1]) {
          around.push(tableData[row - 1][col - 1]);
          around.push(tableData[row - 1][col]);
          around.push(tableData[row - 1][col + 1]);
          
        }
        around.push(tableData[row][col - 1]);
        around.push(tableData[row][col + 1]);
        
        if (tableData[row + 1]) {
          around.push(tableData[row + 1][col - 1]);
          around.push(tableData[row + 1][col]);
          around.push(tableData[row + 1][col + 1]);

        }

        const count = around.filter( (v) => [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE].includes(v) ).length;
        tableData[row][col] = count;
        if(count === 0) {
          checkAround(row - 1, col);
          checkAround(row, col - 1);
          checkAround(row, col + 1);
          checkAround(row + 1, col);
        }
      }

      checkAround(row, col);

      if(counter === complete) {
        return {
          ...state,
          tableData,
          openedCount: counter,
          checked: check,
          gameOver: true,
          result: 'WIN',

        }
      } else {
        return {
          ...state,
          tableData,
          checked: check,
          openedCount: counter,
        }
      }
      
    }
    case CLICK_MINE: {
      tableData[row] = [...state.tableData[row]];
      tableData[row][col] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData,
        gameOver: true,
        result: 'BOOM!'
      }
    }
    case FLAG_CELL: {
      tableData[row] = [...state.tableData[row]];
      if(tableData[row][col] === CODE.MINE) {
        tableData[row][col] = CODE.FLAG_MINE;
      } else {
        tableData[row][col] = CODE.FLAG;
      }
      return {
        ...state,
        tableData
      }
    }
    case QUESTION_CELL: {
      tableData[row] = [...state.tableData[row]];
      if(tableData[row][col] === CODE.FLAG_MINE) {
        tableData[row][col] = CODE.QUESTION_MINE;
      } else {
        tableData[row][col] = CODE.QUESTION;
      }
      return {
        ...state,
        tableData
      }
    }
    case NORMALIZE_CELL: {
      tableData[row] = [...state.tableData[row]];
      if(tableData[row][col] === CODE.QUESTION_MINE) {
        tableData[row][col] = CODE.MINE;
      } else {
        tableData[row][col] = CODE.NORMAL;
      }
      return {
        ...state,
        tableData
      }
    }
    case INCREMENT_TIMER: {
      return {
        ...state,
        timer: timer + 1
      }
    }

    default:
      return state;
  }
};

export const TableContext = createContext();

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, gameOver, result, timer } = state;
  const value = useMemo(() => ({ tableData, dispatch, gameOver, result }), [tableData]);

  useEffect( () => {
    let timer;
    if (gameOver === false) {
      timer = setInterval(() => {
        dispatch({ type: INCREMENT_TIMER });
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [gameOver])
  
  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </TableContext.Provider>
  )
}

export default MineSearch;