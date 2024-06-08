import './UserCard.css'
import { AiFillCloseCircle } from 'react-icons/ai'; 

const UserCard = ({user, backgroundColor, deleteUser}) => {
    return (
        <div className='user-card'>
            <AiFillCloseCircle className='delete'
                size={25}
                onClick={() => deleteUser(user.id)}
            />
            <div className='header' style={{backgroundColor}}>
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