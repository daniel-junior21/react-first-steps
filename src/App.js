import { useState } from 'react';
import Banner from './components/Banner/Banner';
import UserForm from './components/UserForm';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [users, setUsers] = useState([
    {id:crypto.randomUUID(), name:"Daniel", role: "Developer", image:"https://github.com/daniel-junior21.png", team:"Back-End", fav: false},
    {id:crypto.randomUUID(), name:"Daniel", role: "Developer", image:"https://github.com/daniel-junior21.png", team:"Front-End", fav: false},
    {id:crypto.randomUUID(), name:"Daniel", role: "Developer", image:"https://github.com/daniel-junior21.png", team:"Mobile", fav: false}
  ]);

  const [teams, setTeams] = useState([
    {id: crypto.randomUUID(), name:"Back-End", color: "#57C278"}, 
    {id: crypto.randomUUID(), name:"Front-End", color: "#82CFFA"}, 
    {id: crypto.randomUUID(), name:"Mobile", color: "#FEBA05"}
  ]);

  const setNewUser = (user) => {
    setUsers([...users, user]);
  }

  const setNewTeam = (team) => {
    setTeams([...teams, team]);
  }

  function deleteUser(id) {
    setUsers(users.filter(user => user.id !== id))
    console.log('User deleted with success!');
  }

  function updateTeamColor(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  function favUser(id) {
    setUsers(users.map(user => {
      if(user.id === id) {
        user.fav = !user.fav;
      }
      return user
    }))
  }

  return (
    <div className="App">
      <Banner />
      <UserForm
        setNewUser={user => setNewUser(user)}
        setNewTeam={team => setNewTeam(team)}
        teamsNames={teams.map(team => team.name)}/>
      {teams.map(team => 
      <Team 
        key={team.name}
        team={team}
        users={users.filter(user => user.team === team.name)}
        updateColor={updateTeamColor}
        deleteUser={deleteUser}
        favUser={favUser}
      />)}
      <Footer />
    </div>
  );
}

export default App;
