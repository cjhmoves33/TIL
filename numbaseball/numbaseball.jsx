import React, { useState, useRef } from 'react';
import TryCount from './trycount'
import Try from './try';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  while ( array.length < 4 ) {
    const chosen = candidate.splice( Math.floor( Math.random() * ( candidate.length )), 1 )[0];
    array.push(chosen);
  }
  return array;
}

const NumBaseball = () => {

  const [ result, setResult ] = useState('');
  const [ value, setValue ] = useState('');
  const [ tries, setTries ] = useState([]);
  const [ answer, setAnswer ] = useState(getNumbers());

  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if(value === answer.join('')) {
      setResult('home run!');
      setValue('');
      setTries([]);
      setAnswer(getNumbers())
      inputRef.current.focus();
    } else {
      const answerArray = value.split('').map( v => parseInt(v));
      let strike = 0;
      let ball = 0;

      if( tries.length >= 9) {
        setResult(`fail.. count over.. correct is: ${answer.join('')}`);
        setValue('');
        setTries([]);
        setAnswer(getNumbers());
        inputRef.current.focus();
        
      } else {
        for( let i = 0; i < 4 ; i++) {
          if (answerArray[i] === answer[i]) {
            strike ++;
          } else if ( answer.includes(answerArray[i])) {
            ball ++;
          }
        }

        setTries((prevState) => {
          return [...prevState, { try: value, result: `${strike}strike ${ball}ball`}]
        });
        setValue('');
        inputRef.current.focus();
      };
    };
  };
  
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput}></input>
      </form>
      <TryCount count={tries.length} />
      <ul>
        {tries.map( (v,i) => {
          return (
            <Try key={`${i + 1}차 시도`} tryInfo={v} index={i} />
          );
        })}
      </ul>
    </>
  );
}

export default NumBaseball;