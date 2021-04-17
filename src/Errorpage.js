import {Link} from 'react-router-dom';

function Errorpage() {
    return (
        <div className='error'>
            <h2>Sorry this page doesnt exist</h2>
            <Link to='/'>back to the homepage</Link>
        </div>
    )
}

export default Errorpage;