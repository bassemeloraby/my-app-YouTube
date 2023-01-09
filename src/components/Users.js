import { Fragment, useState } from 'react';
import AddUser from './AddUser';
const Users = ({ deleteHandler }) => {

  const [updateState, setUpdateState] = useState(-1);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
    },
    { id: 2, name: 'Ervin Howell', username: 'Antonette' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha' },
  ]);
  const EditHandler = (id) => {
    console.log(id);
    
    setUpdateState(id);
  };
  //add
const addUser = (user) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newUser = { id, ...user }
  setUsers([...users, newUser])
}
  return (
    <Fragment><AddUser onAdd={addUser}/>
    <div className="container row justify-content-center">
      {users.map((user) =>
        updateState === user.id ?(<UserUpdate/>):
        (
        <div
          className="card m-2 col-3"
          style={{ width: '200px' }}
          key={user.id}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.name}</li>
          </ul>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => deleteHandler(user.id)}
          >
            x
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => EditHandler(user.id)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
    </Fragment>
  );
};

//UserUpdat component
const UserUpdate =() => {
  return ( 
    <div
    className="card m-2 col-3"
    style={{ width: '200px' }}
  >
    <input type="text" />
  </div>
)
}
export default Users;
