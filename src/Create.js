import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Team red');
  // eslint-disable-next-line no-unused-vars
  const [pending, setPending] = useState(false);

  const history = useHistory();

  const handleSubmit = function (e) {
    e.preventDefault();
    const blog = {title, body, author}

    setPending(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(blog)
    })
    .then(()=>{
      console.log('New blog added');
      setPending(true);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Team Red">Team Red</option>
          <option value="Team Blue">Team Blue</option>
        </select>
        <button>Add Blog</button>
        
      </form>
    </div>
    
  );
}
 
export default Create;