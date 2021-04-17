import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Errorpage from './Errorpage';

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <Errorpage />
            </Route>
          </Switch>
        </div>
      </div>


    </Router>
  );
}

export default App;
