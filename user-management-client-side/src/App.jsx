import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })

  const handleAddUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user);
    fetch('http://localhost:5000/users', {
      method:"POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      const newUsers = [...users, data]
      setUsers(newUsers);
      form.reset();
    })
  }

  return (
    <>
      <form onSubmit={handleAddUser}>
        <input type='text' name='name' id=""></input>
        <br />
        <input type='email' name='email' id=""></input>
        <br />
        <input type='submit' value="Add User" id=""></input>
      </form>

      <dir>
        {
          users.map(user => <div key={user.id}>
              <span>Id: {user.id}. Name: {user.name}. Email: {user.email}</span>
          </div>)
        }
      </dir>
    </>
  )
}

export default App
