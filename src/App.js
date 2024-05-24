import { useState } from 'react';
import Banner from './components/Banner/Banner';
import UserForm from './components/UserForm';
import Team from './components/Team';

function App() {
  const [users, setUsers] = useState([]);

  const teams = [
    {name:"Back-End", primaryColor: "#57C278", secondaryColor: "#D9F7E9"}, 
    {name:"Front-End", primaryColor: "#82CFFA", secondaryColor: "#E8F8FF"}, 
    {name:"Mobile", primaryColor: "#FEBA05", secondaryColor: "#FFF5D9"}
  ]

  const setNewUser = (user) => {
    console.log('response user form:', user);
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <Banner />
      <UserForm
        setNewUser={user => setNewUser(user)}
        teamsNames={teams.map(team => team.name)}/>
      {teams.map(team => <Team 
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        users={users.filter(user => user.team === team.name)}
      />)}
    </div>
  );
}

export default App;
