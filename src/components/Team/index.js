import UserCard from '../UserCard';
import './Team.css'

const Team = (props) => {
    return (
        props.users.length > 0 && <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className="users">
                {props.users.map( user => <UserCard key={user.name} user={user} backgroundColor={props.primaryColor}/> )}
            </div>
        </section>
    )
}

export default Team;