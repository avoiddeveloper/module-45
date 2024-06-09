import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Clients</h2>
            <p>Our Satisfied User: {users.length}</p>
            <div className="users_container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;