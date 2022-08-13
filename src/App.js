import logo from './logo.svg';
import './App.css';
import LoginUser from './components/LoginUser';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
