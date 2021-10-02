import { useCallback } from 'react';

const inputRules = () => {

  const setInputRules = useCallback( () => [
    {
      required: true,
      message: '빈 칸을 채워주세요.'
    }
  ], []);

  return setInputRules();
}

export default inputRules;