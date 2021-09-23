import React, { Component } from 'react';
import './rsp.scss'

// 클래스의 경우 || constructor -> render -> ref -> componentDidMount 
// -> (setState/props가 바뀔때 shouldComponentUpdate(return true일 때) -> render -> componentDidUpdate) 
// (부모 컴포넌트에서 자식 컴포넌트르 없앨 때 -> componentWillUnmount -> 소멸)

const rspCoord = {
  scissor: '0px', rock: '-133px', paper: '-266px'
};

const score = {
  scissor: 1, rock: 0, paper: -1,
}

const comChoice = (choice) => {
  return Object.entries(rspCoord).find( kv => kv[1] === choice )[0];
}


class Rsp extends Component {
  state = {
    result: '',
    imgCoord: rspCoord.scissor,
    score: 0,
  };

  // onOff = 0

  interval;

  game = () => {
    // this.onOff = 1;
    this.interval = setInterval( () => {
      const { imgCoord } = this.state;
      if(imgCoord === rspCoord.scissor) {
        this.setState({imgCoord: rspCoord.rock})

      } else if (imgCoord === rspCoord.rock) {
        this.setState({imgCoord: rspCoord.paper})

      } else if (imgCoord === rspCoord.paper) {
        this.setState({imgCoord: rspCoord.scissor})

      }
    }, 300)
  }

  componentDidMount() { //컴포넌트가 첫 렌더링 후, 여기에 비동기 요청을 많이 한다.
    this.game()
  } 

  componentDidUpdate() { //rerendering후에 실행

  }

  componentWillUnmount() { // 컴포넌트가 제거되기 직전, 부모컴포넌트에서 자식컴포넌트를 없앨 때., 비동기 요청 정리를 많이 한다.
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => () => {
    // this.onOff = 0;
    clearInterval(this.interval);
    const { imgCoord } = this.state;

    const myScore = score[choice];
    const comScore = score[comChoice(imgCoord)];
    const diff = myScore - comScore;

    if(diff === 0) {
      this.setState({
        result: 'DRAW'
      });
    } else if([-1, 2].includes(diff)){
      this.setState( (prevState) => {
        return {
          score: prevState.score + 1,
          result: 'WIN'
        };
      });
    } else if([1, -2].includes(diff)){
      this.setState( (prevState) => {
        return {
          score: prevState.score - 1,
          result: 'LOOSE'
        };
      });
    };

    setTimeout(this.game, 1500)
  }

  // onReGame = () => {
  //   if(this.onOff === 0) {
  //     this.game()
  //   } else {};
  // };

  render() {
    const { result, imgCoord, score } = this.state;

    return (
      <>
        <div id="computer" style={{backgroundPosition: `${imgCoord} 0`}} ></div>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>ROCK</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>SCISSOR</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>PAPER</button>
          <br></br>
          {/* <button onClick={this.onReGame}>re game</button> */}
        </div>
        <div>{result}</div>
        <div>score: {score}</div>
      </>
    )
  }
}

// export default Rsp