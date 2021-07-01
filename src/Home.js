import logo from './resources/logo.png';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Install from './Install'
import Login from './Login'

function Home() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' wcomponent={Home} />
          <Route path='/Install' component={Install} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
      <div className="ses-welcome">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Log in to get started.
        </p>
      </div>
    </div>
  );
}

export default Home;
