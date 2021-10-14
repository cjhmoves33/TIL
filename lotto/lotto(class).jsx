import React, { Component } from 'react';
// import './ball.scss'
import Ball from './ball';

const getLuckyNumbers = () => {
  console.log('get')

  const candidate = Array(45).fill().map(( v, i ) => i + 1 );
  const shuffle = [];

  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }

  const bonus = shuffle[shuffle.length -1];
  const luckyNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...luckyNumbers, bonus];
}


class Lotto extends Component {
  state = {
    winNumbers: getLuckyNumbers(),
    winBalls: [],
    bonus: null,
    redo: false,
  };

  timeouts = [];

  game = () => {
    const { winNumbers } = this.state;
    for(let i = 0; i < winNumbers.length -1; i++) {
      this.timeouts[i] = setTimeout( () => {
        this.setState( (prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]]
          };
        });
      }, (i +1) * 1000);
    }
    this.timeouts[6] = setTimeout( () => {
      this.setState({
        bonus: winNumbers[6],
        redo: true
      });
    }, 7000)
  }

  componentDidMount() {
   this.game();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.winBalls.length === 0) {
      this.game();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach( timer => clearTimeout(timer) );
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getLuckyNumbers(),
      winBalls: [],
      bonus: null,
      redo: false
    });
    this.timeouts = [];
  }

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>Lucky Numbers</div>
        <div id="result">
          {winBalls.map( v => <Ball key={v} number={v} />)}
        </div>
        <div>BONUS!</div>
        {bonus && <Ball number={bonus}/>}
        {redo && <button onClick={this.onClickRedo}> one more? </button>}
      </>
    )
  }
}

export default Lotto;
