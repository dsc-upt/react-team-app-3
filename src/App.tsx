import React, {useState} from 'react';
import './App.scss';
import './User/user.scss';
import UserList from './User/UserList';
import data from './User/data';

function App() {
  const [users, setUser] = useState(data);
  return (
    <div className="App">
      <h1>{users.length} Users on the List</h1>
        <UserList users={users}/>
    </div>
  );
}

export default App;
