const buffer = Buffer.from('버퍼로 변신');
console.log('from():', buffer);
console.log('buffer의 크기(bytes):', buffer.length);
console.log('toString()', buffer.toString());

const arr = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('나뉜 '), Buffer.from('데이터가 '), Buffer.from('모임')];
console.log(typeof Buffer.concat(arr)); // Buffer.concat은 여러배열을 모으는게 아니라, 배열을 인자로 받아 하나의 버퍼객체로 만드는 메서드.
console.log(Buffer.concat(arr));
console.log(Buffer.concat(arr).toString());

console.log('빈 버퍼: ', Buffer.alloc(10));
