import { Fragment, useState } from 'react';
import AddUser from './components/AddUser';

import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
    },
    { id: 2, name: 'Ervin Howell', username: 'Antonette' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha' },
  ]);
  //delete
  const deleteHandler = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
//add
const addUser = (user) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newUser = { id, ...user }
  setUsers([...users, newUser])
}
  return (
    <Fragment>
    <AddUser onAdd={addUser}/>
    <Users users={users} deleteHandler={deleteHandler}/>
      
    </Fragment>
  );
}

export default App;
