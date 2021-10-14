import React, { useState, useRef, memo } from 'react';

import './responseCheck.scss'

import RenderAverage from './src/renderAverage';
import ResetButton from './src/resetButton';


// let timeout,startTime, endTime;

const ResponseCheck = memo(() => {

  // hooks
  const [ state, setState ] = useState('waiting');
  const [ message, setMessage ] = useState('click to start');
  const [ record, setRecord ] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () =>{
    if( state === 'waiting') {
      setState('ready');
      setMessage('ready!');
      timeout.current = setTimeout(()=> {
        setState('now');
        setMessage('now!');
        startTime.current = new Date();
      }, Math.floor(( Math.random() * 1000 ) + 2000 ))
    } else if( state === 'ready' ) {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('don\'t cheat!');
    } else if ( state === 'now' ) {
      endTime.current = new Date();
      setState('waiting');
      setMessage('click to start');
      setRecord( prevResult => [...prevResult, endTime.current - startTime.current] );
    }
  }

  const onReset = () => {
    setRecord([]);
  }


  return (
    <>
      <div id="response-check-screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      <RenderAverage record={record} />
      <ul>
        {record.map(( time ) => {
          return (
            <li key={time+1}>record: {time}</li>
          )
        })}
      </ul>
      <ResetButton reset={onReset} />
    </>
  )

  // class
  // state = {
  //   state: 'waiting', // state안에 state가 있어도 상관없음.
  //   message: 'click to start',
  //   record: [],
  // };


  // timeout;
  // startTime;
  // endTime;

  // onClickScreen = () => {
  //   const { state, message, record } = this.state;
  //   if( state === 'waiting') {
  //     this.setState({
  //       state: 'ready',
  //       message: "ready!",
  //     });
  //     this.timeout = setTimeout( () => {
  //       this.setState({
  //         state: 'now',
  //         message: "now!",
  //       });
  //       this.startTime = new Date();
  //     }, Math.floor(( Math.random() * 1000 ) + 2000));
  //   } else if( state === 'ready' ) {
  //     clearTimeout(this.timeout);
  //     this.setState({
  //       state: 'waiting',
  //       message: 'don\'t cheat!'
  //     })
  //   } else if ( state === 'now') {
  //     this.endTime = new Date();
  //     this.setState((prevState) => {
  //       return (
  //         {
  //           state: 'waiting',
  //           message: " click to start",
  //           record: [...prevState.record, this.endTime - this.startTime]
  //         }
  //       )
  //     });
  //   };
  // }

  // renderAverage = () => {
  //   const { record } = this.state;
  //   return (
  //     record.length === 0
  //     ? null
  //     : <div>average: {(record.reduce( (acc, cur) => acc + cur ) / record.length).toFixed(2) }</div>
  //   )
  // }

  // recordList = () => {
  //   const { record } = this.state;
  //   return (
  //     record.length === 0
  //     ? null
  //     : record.map( (record ,idx) => {
  //       return (
  //         <li key={record+idx}>
  //           {`record${idx+1}: ${record}`}
  //         </li>
  //       )
  //     } )
  //   )
  // }

  // render() {
  //   const { state, message } = this.state;
  //   return (
  //     <>
  //       <div id="response-check-screen" className={state} onClick={this.onClickScreen}>
  //         {message}
  //       </div>
  //       {this.renderAverage()}
  //       <ul>
  //         {this.recordList()}
  //       </ul>
  //     </>
  //   );
  // };
})
export default ResponseCheck;