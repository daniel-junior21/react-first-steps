import './UserCard.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; 

const UserCard = ({user, backgroundColor, deleteUser, favUser}) => {
    function fav() {
        favUser(user.id);
    }
    
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
                <div className='fav'>
                    {user.fav
                        ? <AiFillHeart size={25} onClick={fav} /> 
                        : <AiOutlineHeart size={25} onClick={fav} />
                    }
                </div>
            </div>
        </div>
    )
}

export default UserCard;