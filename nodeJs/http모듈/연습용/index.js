const form = document.querySelector('#form');

const getProfile = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch(err => console.error(err));
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const targetUserName = e.target.username.value;
  // console.log(e.target.username.value); // * form의 자식 input의 id를 통해 접근할 수 있다.
  const userList = await getProfile('/users');
  const targetUser = userList.find(user => user.name === targetUserName);
  console.log(targetUser);
})