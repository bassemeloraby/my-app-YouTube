import { Fragment, useState } from 'react';


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

  return (
    <Fragment>
    
    <Users users={users} deleteHandler={deleteHandler}/>
      
    </Fragment>
  );
}

export default App;
