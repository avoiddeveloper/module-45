import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='user_container'>
           <h3>Name: {name}</h3>
           <p>Email: {email}</p>
           <p>Phone: {phone}</p>
           <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;