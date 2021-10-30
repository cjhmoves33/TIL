const form = document.querySelector('#form');

const getProfile = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch(err => console.error(err));
}

const div = document.createElement('div');
div.id = 'infoTable';
document.body.append(div);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const infoTable = document.querySelector('#infoTable');
  infoTable.textContent = '';

  const targetUserName = e.target.username.value;
  // console.log(e.target.username.value); // * form의 자식 input의 id를 통해 접근할 수 있다.
  const userList = await getProfile('/users');
  const targetUser = userList.find(user => user.name === targetUserName);
  
  for(let info in targetUser) {
    const p = document.createElement('p');
    p.textContent = `${info}: ${targetUser[info]}`;
    infoTable.append(p);
  }
});

