import logo from './logo.svg';
import './App.css';
import Forms from './Components/Forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <h1>Formulários</h1>
        <Forms />
      </div>
    </div>
  );
}

export default App;
