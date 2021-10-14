import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../reducers/index'

const configureStore = () => {
  // 추측
  // react의 useReducer처럼 state저장공간과 dispatch함수를 지원하는 듯하다.
  // useReducer의 경우 인자로 reducer함수와 initialState를 입력해줬지만,
  // createStore의 경우 인자인 reducer가 initialState를 가지고 있기 때문에 별도로 입력하지 않는 듯하다.
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper; 