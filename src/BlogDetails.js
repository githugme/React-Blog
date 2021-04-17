import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetails = function(){

    

    const {id} = useParams();

    const {data:blog, pending, error} = useFetch('http://localhost:8000/blogs/'+id);

    const history = useHistory();

    const handleDelete = function (id) {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
        })
        .then(()=>history.push('/'))
    }


    return(
        <div className="blog-details">
            
            {pending && <div>loading...</div>}
            {error && <div>{error}</div>}

            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p>
                <button onClick={handleDelete}>delete</button>
                </article>
            )}
                
            
        </div>
    )
}

export default BlogDetails;