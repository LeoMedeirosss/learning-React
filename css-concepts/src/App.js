import logo from './logo.svg';
import './App.css';
import Exemplo from './components/Exemplo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>React com CSS</h1>

      <Exemplo />
      <p>parágrafo do app.js</p>
    </div>
  );
}
export default App;
