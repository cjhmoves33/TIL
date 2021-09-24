import React, { useState, useCallback, useContext } from 'react';
import { TableContext } from '../mineSearch';
import { START_GAME } from '../mineSearch';

const Form = () => {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [quantityOfMine, setQuantityOfMine] = useState(10);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e)=> {
    setRow(e.target.row);
  }, []);

  const onChangeColumns = useCallback((e)=> {
    setCol(e.target.row);
  }, [])

  const onChangeQuantityOfMine = useCallback((e)=> {
    setQuantityOfMine(e.target.row);
  }, [])

  const onClickStartButton = useCallback( (e) => {
    e.preventDefault();
    dispatch({ type: START_GAME, row, col, quantityOfMine })
  }, [])


  return (
    <form >
      <input type="number" placeholder='ROWS' value={row} onChange={onChangeRow} />
      <input type="number" placeholder='COLUMNS' value={col} onChange={onChangeColumns} />
      <input type="number" placeholder='MINES' value={quantityOfMine} onChange={onChangeQuantityOfMine} />
      <button onClick={onClickStartButton}>START!!</button>
    </form>
  )
}

export default Form;