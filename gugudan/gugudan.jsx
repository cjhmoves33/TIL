const React = require('react');
const { useRef, useState } = React;

const GuGuDan = () => {
  const [ first, setFirst ] = useState(Math.ceil( Math.random() * 9 ));
  const [ second, setSecond ] = useState(Math.ceil( Math.random() * 9 ));
  const [ value, setValue ] = useState('');
  const [ result, setResult ] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = e => setValue(e.target.value);
  const onSubmitButton = (e) => {
    e.preventDefault();
    if(parseInt(value) === ( first * second )) {
      setResult( `correct! ${value}!` );
      setFirst( Math.ceil( Math.random() * 9 ));
      setSecond( Math.ceil( Math.random() * 9 ));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('🥲');
      setValue('');
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div>{first} X {second} = ?</div>
      <form onSubmit={onSubmitButton}>
        <input ref={inputRef} onChange={onChangeInput} value={value} ></input>
        <button>got it!</button>
      </form>
      <div id='result'>{result}</div>
    </>
  )
}

module.exports = GuGuDan;