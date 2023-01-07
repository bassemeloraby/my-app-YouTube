import { useState } from "react";


function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret"
    },
    { id: 2, name: "Ervin Howell", username: "Antonette" },
    { id: 3, name: "Clementine Bauch", username: "Samantha" }
  ]);
  //delete
  const deleteHandler = (id) => {
   
    setUsers(users.filter((user) => user.id !== id));
  };
  
  return (
    <div className="container d-flex">
      {users.map((user) => (
        <div className="card m-2" style={{ width: "200px" }} key={user.id}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.name}</li>
          </ul>
          <button type="button" class="btn btn-dark" onClick={() => deleteHandler(user.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default App;
