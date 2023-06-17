function clearList() {
  let ul = document.getElementById('user_list');
  while(ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild)
  }

}



function getList() {
  // console.log('connected');
  const url = 'http://localhost:8080/api/users'
  try{
    axios.get(url).then((res) =>{
      const users = res.data.data;
      clearList()
      users.forEach((user) => {
      const li = document.createElement('li')
      li.innerHTML = `${user.name} ${user.age}`
      document.getElementById('user_list').appendChild(li)
    })
  
    })

  } catch(error) {
    console.log('err',error);
  }

}


function deleteList() {
  const url = 'http://localhost:8080/api/delete'
    axios.delete(url).then((res) => {
      const msg = res.data.msg
      clearList()
      const li = document.createElement('li')
      li.innerHTML = msg
      document.getElementById('user_list').appendChild(li)
    }).catch((err) => {
    console.log('err', error);
  })
}


function addList() {

  const nameInput = document.getElementById('name')
  const nameValue = nameInput.value
  const ageInput = document.getElementById('age')
  const ageValue = ageInput.value
  if(!nameValue || !ageValue) {
    document.getElementsByClassName('message')[0].innerHTML = "name and age are required";
    setTimeout(() => {
      document.getElementsByClassName('message')[0].innerHTML = "";
    },2000)
    return;
  }
  const body = {
    name:nameValue,
    age:ageValue
  }
  const url = 'http://localhost:8080/api/user'
  axios.post(url,body).then((res) => {
    const updatedUsers = res.data.data
    clearList();
    updatedUsers.forEach((user) => {
      const li = document.createElement('li')
      li.innerHTML = `${user.name} ${user.age}`
      document.getElementById('user_list').appendChild(li)
    })


}).catch((err)=>{
  console.log('err',err);
})

  nameInput.value = ''
  ageInput.value = ''
}