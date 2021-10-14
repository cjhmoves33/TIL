class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'admin' && password === '1111') ||
        (id === 'guest' && password === '1111')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found~'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'admin') {
        onSuccess({ name: 'admin', role: 'host'});
      } else {
        onError(new Error('no access'))
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id: ');
const password = prompt('enter your password: ');
userStorage.loginUser(id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userInfo => console.log(`hello, ${userInfo.name}! you have a ${userInfo.role} role`),
      error => console.log(error)
      )
  },
  error => {
    console.log(error)
  }
 );

// prompt로 받은 데이터로(서버가 없기때문에 단순 구현) 아주 단순한 코드인데도 콜백 지옥이 보인다.
// 콜백 지옥이 생기면 가독성이 매우 안좋다. 뭐가 어떻게 연결되어 있는지 한눈에 이해가기가 너무 어렵다.
// 그리고 유지보수에 너무 안좋고 에러의 추적이(디버깅)이 매우 어려워질 수 있다.(괜히 콜백 '지옥'이 아니다.)