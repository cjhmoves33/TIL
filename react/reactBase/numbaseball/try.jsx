import React, { PureComponent, memo } from 'react';

// class Try extends PureComponent {

//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <>
//        <div>{tryInfo.try}</div>
//        <div>{tryInfo.result}</div>
//      </>
//     );
//   }
// }

const Try = memo(({ tryInfo }) => {

  return (
    <>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </>
  );
});

export default Try;