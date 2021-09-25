import React, { useState, useCallback, useContext, memo } from 'react';
import { TableContext } from '../mineSearch';
import { START_GAME } from '../mineSearch';

const Form = () => {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [quantityOfMine, setQuantityOfMine] = useState(10);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e)=> {
    setRow(e.target.value);
  }, []);

  const onChangeColumns = useCallback((e)=> {
    setCol(e.target.value);
  }, [])

  const onChangeQuantityOfMine = useCallback((e)=> {
    setQuantityOfMine(e.target.value);
  }, [])

  const onClickStartButton = useCallback( (e) => {
    e.preventDefault();
    dispatch({ type: START_GAME, row, col, quantityOfMine })
  }, [row, col, quantityOfMine])

  console.log('form rendering')


  return (
    <form >
      <input type="number" placeholder='ROWS' value={row} onChange={onChangeRow} />
      <input type="number" placeholder='COLUMNS' value={col} onChange={onChangeColumns} />
      <input type="number" placeholder='MINES' value={quantityOfMine} onChange={onChangeQuantityOfMine} />
      <button onClick={onClickStartButton}>START!!</button>
    </form>
  )
}

export default memo(Form);