const registerForm = document.querySelector('#register-form');

const registerUrl = '/register';
const register = (url, info) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(info)
  }).catch(err => console.log(err));
}

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dataList = [e.target.name.value, e.target.age.value, e.target.status.value, e.target.introduce.value];
  const postData = await register(registerUrl, dataList);

})