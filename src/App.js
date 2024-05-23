import { useState } from 'react';
import Banner from './components/Banner/Banner';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const setNewUser = (user) => {
    console.log('response user form:', user);
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <Banner />
      <UserForm
        setNewUser={user => setNewUser(user)}/>
    </div>
  );
}

export default App;
