import logo from './resources/logo.png';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Install from './Install'
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Install' component={Install} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Log in to get started.
        </p>
      </header>
    </div>
  );
}

export default App;
