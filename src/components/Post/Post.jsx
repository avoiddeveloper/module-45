import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, userId, title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <div className="user_container">
           <h3>Post Id: {userId}</h3> 
           <h3>Post Title: {title}</h3>
           <Link to={`/posts/${id}`}>
                <button>See Details</button>
           </Link>
           <button onClick={handleShowDetail}>Click Here</button>
        </div>
    );
};

Post.propTypes = {
    post : PropTypes.object.isRequired
}

export default Post;