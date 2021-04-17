import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <div>
            <nav className='navbar'>
            <h1>Dev [ React Blogs ] </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link className='create-button' to="/create">Create</Link> 
            </div>
            
            </nav>
        </div>
    )
};

export default Navbar;