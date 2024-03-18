import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
