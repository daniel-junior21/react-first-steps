import './UserCard.css'

const UserCard = ({user}) => {
    return (
        <div className='user-card'>
            <div className='header'>
                <img src={user.image} alt={user.name} />
            </div>
            <div  className='body'>
                <h4>{user.name}</h4>
                <h5>{user.role}</h5>
            </div>
        </div>
    )
}

export default UserCard;