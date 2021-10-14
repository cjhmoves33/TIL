import React, { useState, useReducer, useCallback, useEffect } from 'react';
import './styles.scss';
import Table from './src/table';
import ReGameButton from './src/reGameButton';

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const RE_GAME = 'RE_GAME';
// action의 이름은 UPPER_SNAKE_CASE로 하는것이 국룰..

const O = 'O';
const X = 'X';
const DRAW = 'DRAW';

const initialState = {
  winner: '',
  turn: O,
  table: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
}

const reducer = (state, action) => {
  // dispatch가 호출되면, reducer가 실행된다.
  // reducer는 (useReducer의)state와 dispatch의 action객체를 인자로 받는다.
  // dispatch가 호출되면 dispatch의 인자에있던 action객체를 그대로 가져오는 것.
  switch(action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      const turn = state.turn === O ? X : O
      const table = [...state.table];
      table[action.row] = [...table[action.row]]
      table[action.row][action.col] = state.turn;
      return {
        ...state,
        turn: turn,
        table: table,
        recentCell: [action.row, action.col]
      };
    case RE_GAME:
      return {
        ...action
      }
    default:
      return state
  }
}

const Ttt = () => {
  console.log('rendering main');
  const [state, dispatch] = useReducer(reducer, initialState);
  const {winner, turn, table, recentCell} = state;

  const onClickTable = useCallback(() => {
    // dispatch안에 들어가는 객체는 action이라고 한다.
    dispatch({ type: SET_WINNER,  winner:O })
    // dispatch안의 action을 실행한다.
    // reducer가 dispatch를 실행시켜준다. 
  }, []);

  useEffect( () => {
    const [row, col] = recentCell;
    let win = false;
    let draw = true;

    // 최초시작 or 초기화 후
    if(row < 0) { return; }

    // draw인지확인
    table.forEach( row => {
      if( row.includes('') ) {
        draw = false;
      }
    });

    if( draw ) {
      dispatch({ type: SET_WINNER, winner: DRAW })
    }


    if(( table[row][0] === table[row][1] ) && ( table[row][1] === table[row][2] )) {
      win = true;
    } else if(( table[0][col] === table[1][col] ) && ( table[1][col] === table[2][col] ) ) {
      win = true;
    } else if( !(table[1][1] === '') && ( table[0][0] === table[1][1] ) && ( table[1][1] === table[2][2] )) {
      win = true;
    } else if (!(table[1][1] === '') && ( table[0][2] === table[1][1] ) && ( table[1][1] === table[2][0] )) {
      win = true;
    }
    if( win ){
      dispatch({ type: SET_WINNER, winner: table[row][col] });
    }
  }, [recentCell])

  return (
    <>
      <Table dispatch={dispatch} tableData={table} winner={winner} />
      {(winner === O || winner === X) && <div>{winner} Win!</div>}
      {winner === DRAW && <div>DRAW</div>}
      {winner && <ReGameButton dispatch={dispatch} />}
    </>
  )
}

export const initial = initialState;
export default Ttt;