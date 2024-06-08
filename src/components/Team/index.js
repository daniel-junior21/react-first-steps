import UserCard from '../UserCard';
import './Team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({ team, users, updateColor, deleteUser}) => {
    return (
        users.length > 0 && <section className="team" style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input type='color' className='color' onChange={event => updateColor(event.target.value, team.id)}/>
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className="users">
                {users.map( user => {
                    console.log('Renderizando colaborador', user.id);
                    return <UserCard key={user.id} 
                                user={user} 
                                backgroundColor={team.color}
                                deleteUser={deleteUser}
                            /> 
                })}
            </div>
        </section>
    )
}

export default Team;