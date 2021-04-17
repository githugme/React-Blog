import {React} from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch';


const Home = () => {

    const {data:blogs, pending, error} = useFetch("http://localhost:8000/blogs")



    return ( 
        <div>

        {error && <div>{error}</div>}

        {pending && <div>loading data...</div>}

            
        {blogs && <BlogList blogs={blogs} />}
            
        </div>
     );
}
 
export default Home;