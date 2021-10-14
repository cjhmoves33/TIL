import { useMemo } from 'react';

const signUpLabel = (value = null) => {

  const signUpLabel = useMemo( () => (
    {
      label: value,
      labelCol: {
        span: 6,
        offset: 6
      }
    }
  ), []);
  
  return signUpLabel;
}


export default signUpLabel;