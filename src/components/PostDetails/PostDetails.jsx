import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetail = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = postDetail;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    console.log(postId);
    return (
        <div className='user_container'>
            <h3>Post Details</h3>
            <h2>User Id: {id}</h2>
            <p>Title: {title}</p>
            <p>Description: {body}</p>
            <button onClick={handleGoBack} >Go Back</button>
        </div>
    );
};

export default PostDetails;