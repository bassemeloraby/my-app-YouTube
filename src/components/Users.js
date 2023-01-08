import { useState } from 'react';

const Users = ({ users, deleteHandler }) => {
  const [updateState, setUpdateState] = useState(-1);
  const EditHandler = (id) => {
    console.log(id);
    
    setUpdateState(id);
  };
  return (
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
