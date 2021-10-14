import React, { useState, useEffect, useRef } from 'react';

import './rsp.scss'
import ResultAndScore from './resultAndScore';

// 클래스의 경우 || constructor -> render -> ref -> componentDidMount 
// -> (setState/props가 바뀔때 shouldComponentUpdate(return true일 때) -> render -> componentDidUpdate) 
// (부모 컴포넌트에서 자식 컴포넌트르 없앨 때 -> componentWillUnmount -> 소멸)


const rspCoord = {
  scissor: '0px', rock: '-133px', paper: '-266px'
};

const scoreGuide = {
  scissor: 1, rock: 0, paper: -1,
};

const comChoice = (choice) => {
  return Object.entries(rspCoord).find( kv => kv[1] === choice )[0];
}


const Rsp = () => {
  console.log('render parent')
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rspCoord.scissor);
  const [score, setScore] = useState(0);
  const interval = useRef(null);

  useEffect( () => { // componentDidMount, componentDidUpdate 의 역할 (1대1 대응은 아님) , 튜토리얼에서는 이 둘을 하나로 합친 것 이라고함.
    // interval.current = setInterval(game, 500);
    // interval.current = setTimeout(game, 500)
    setTimeout(game, 500)
    return () => { // return이 componentWillUnmount역할
      // clearInterval(interval.current);
      // clearTimeout(interval)
    }
  }, [imgCoord]);

  useEffect( () => {

  })

  const game = () => {

    if(imgCoord === rspCoord.scissor) {
      setImgCoord(rspCoord.rock);

    } else if (imgCoord === rspCoord.rock) {
      setImgCoord(rspCoord.paper);

    } else if (imgCoord === rspCoord.paper) {
      setImgCoord(rspCoord.scissor);

    }
  }

  const onClickBtn = (choice) => () => {

    const myScore = scoreGuide[choice];
    const comScore = scoreGuide[comChoice(imgCoord)];
    const diff = myScore - comScore;

    if(diff === 0) {
      setResult('DRAW');

    } else if([-1, 2].includes(diff)){
      setScore( (prevState) => prevState + 1 );
      setResult('WIN');

    } else if([1, -2].includes(diff)){
      setScore( (prevState) => prevState -1 );
      setResult('LOOSE');

    };
  };

  return (
    <>
      <div id="computer" style={{backgroundPosition: `${imgCoord} 0`}} ></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('rock')}>ROCK</button>
        <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>SCISSOR</button>
        <button id="paper" className="btn" onClick={onClickBtn('paper')}>PAPER</button>
      </div>
      <ResultAndScore result={result} score={score} />
    </>
  )
}


export default Rsp;