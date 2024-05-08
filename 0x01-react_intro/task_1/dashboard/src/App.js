import logo from './Holberton_Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div>
    <div className="App-header">
      <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
    </div>
    <div className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
    </div>
  );
}

export default App;
