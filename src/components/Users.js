import React from 'react';

const Users = ({ users, deleteHandler }) => {
  return (
    <div className="container d-flex">
      {users.map((user) => (
        <div className="card m-2" style={{ width: '200px' }} key={user.id}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.name}</li>
          </ul>
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => deleteHandler(user.id)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
