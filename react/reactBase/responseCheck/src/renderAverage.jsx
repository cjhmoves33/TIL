import React , { memo } from 'react';

const RenderAverage = memo(({ record }) => {
  return (
    <>
      {record.length === 0
      ? null
      : record.reduce(( acc, cur ) =>  acc + cur ) / record.length}
    </>
  );
});

export default RenderAverage;