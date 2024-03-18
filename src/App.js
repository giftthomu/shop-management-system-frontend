import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
