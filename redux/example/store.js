const redux = require('redux');
const { combineReducers, createStore } = redux;

// initialState
const initialState1 = {
  number: 1,
}
const initialState2 = {
  name: 'BOK'
}

// action type(reducer1)
const INCREASE_NUMBER = 'INCREASE_NUMBER';
// action type(reducer2)
const CHANGE_NAME = 'CHANGE_NAME';


// action(reducer1)
const increaseNumber = (num) => {
  return {
    type: INCREASE_NUMBER,
    payload: {
      num
    }
  }
}
//action(reducer2)
const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: {
      name
    }
  }
}


// reducer1
const numberModifier = (state = initialState1, action) => {
  switch(action.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        number: state.number + action.payload.num
      }
    default:
      return state;
  }
}

// reducer2
const nameModifier = (state = initialState2, action) => {
  switch(action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload.name
      }
    default:
      return state;
  }
}

// const store = redux.createStore(numberModifier);
const rootReducer = combineReducers({
  numberModifier, 
  nameModifier
})
const store = createStore(rootReducer);

// console.log(store)
console.log(store.getState());
// ? createStore로 store를 생성할 때 state의 초기값을 따로 설정하지 않으면 인자로 들어온 reducer에 초기값으로 설정된 state를 사용한다.
// ? 그런데 numberModifier에서 default로 state를 리턴해주지 않으면 store의 state값이 undefined임을 볼 수 있는데, getStore를 할 때 reducer를 한번 호출하는 듯하다.
