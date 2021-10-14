import React, { useCallback } from 'react';
import { RE_GAME, initial } from '../ttt';

const ReGameButton = ({ dispatch }) => {
  const onClickReGameButton = useCallback(() => {
    dispatch({
      type: RE_GAME,
      ...initial,
    });
  }, [])
  return (
    <>
      <button onClick={onClickReGameButton}> Re Game? </button>
    </>
  )
}

export default ReGameButton;