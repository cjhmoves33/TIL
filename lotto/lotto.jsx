import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
// import './ball.scss'
import Ball from './ball';
import Button from './button';

const getLuckyNumbers = () => {
  console.log('getLuckyNumbers called')

  const candidate = Array(45).fill().map(( v, i ) => i + 1 );
  const shuffle = [];

  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }

  const bonus = shuffle[shuffle.length -1];
  const luckyNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...luckyNumbers, bonus];
}

const Lotto = () => {
  console.log('component start')
  const [winBalls, setWinBalls] =useState([]);
  const [bonus, setBonus] =useState(null);
  const [redo, setRedo] =useState(false);
  const timeouts = useRef([]);
  const saveLottoNumbers = useMemo( () => {
    console.log('useMemo 최초싱행 or 변화감지')
    return getLuckyNumbers()
  }, []);
  // useMemo에서 getLuckyNumbers의 라턴값을 캐싱한다.
  // 두번째 인자(배열)에 들어있는 값이 변하지 않으면 최초실행후 리렌더링이 일어나도 getLuckyNumbers를 재실행 하지않는다.
  const [winNumbers, setWinNumbers] = useState(saveLottoNumbers);
  // getLuckyNumbers()대신 saveLottoNumbers를 인자로 준다.
  // winNumbers에는 캐싱된 getLuckyNumbers()의 리턴값이 담긴다.
  
  useEffect( () => {

    // Logic

    // 두번째 인자에 빈 배열을 주게되면 componentDidMount와 같은 역할을 한다.
    // useEffect는 페이지 첫 렌더링때 무조건 발생 하는데 감지할 변화를 주지않으면 이 후에 실행될 일이 없음.

  }, []);

  const blockingMountEffect = useRef(false);
  useEffect( () => {
    if( !blockingMountEffect.current ) {
      blockingMountEffect.current = true;
    }
    // else는 선택
    // Logic

    // 두 번째 인자에 변화를 감지할 값을 넣으면 된다. 예제이기 때문에 아무값도 안 넣음.
    // 이렇게하면 componentDitUpdate의 효과를 줄 수있다.
  }, [])


  useEffect( () => {
    console.log('use Effect start')
    for(let i = 0; i < winNumbers.length -1; i++) {
      timeouts.current[i] = setTimeout( () => {
        setWinBalls( (prevBalls) => [...prevBalls, winNumbers[i]] )
      }, (i +1) * 1000); 
    }

    timeouts.current[6] = setTimeout( () => {
      setBonus([winNumbers[6]]);
      setRedo(true);
    }, 7000);

    return () => {
      console.log('use Effect return, 변화감지')
      timeouts.current.forEach( v => clearTimeout(v));
    }
  }, [timeouts.current]);
  

  const onClickRedo = useCallback(() => {
    // 자식 컴포넌트에 함수를 props로 넘겨줄 때는 반드시 useCallBack으로 함수를 감싸줘야한다.
    // useCallBack을 안써주면 부모 컴포넌트가 리렌더링 될 때마다 함수를 생성하게 되는데, 그 때 자식 컴포넌트는 새로운 props를 받는다고 인식을 하고 리렌더링을 하게된다.
    
    // console.log('click redo button')
    // console.log('redo button: ', winNumbers)
    // console.log('redo button: ', timeouts.current)
    // console.log('redo button: ', saveLottoNumbers)

    setWinNumbers(getLuckyNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = []
    // useCallBack으로 묶어주면 함수자체를 캐싱하게 되는데, 함수만 기억하는 것이아니라 전 state등의 정보를 계속기억하게 된다.
    // useCallBack을 사용한 함수에서 state와 같이 변화해야하는 정보를 사용해야한다면 두번째 인자의 배열에 변화를 감지할 정보를 넘겨야한다.
  }, [winNumbers]);

  return(
    <>
      <div>Lucky Numbers</div>
      <div id="result">
        {winBalls.map( v => <Ball key={v} number={v} />)}
      </div>
      <div>BONUS!</div>
      {bonus && <Ball number={bonus} oc={onClickRedo}/>}
      {redo && <Button onClick={onClickRedo}/>}
      {/* {redo && <button onClick={onClickRedo}> one more? </button>} */}
    </>
  )
}


export default Lotto;
