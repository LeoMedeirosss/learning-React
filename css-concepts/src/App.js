import logo from './logo.svg';
import './App.css';
import Exemplo from './components/Exemplo';

function App() {
  const n = 10

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>React com CSS</h1>

      <Exemplo />
      <p>parágrafo do app.js</p>

      <h2 style={n < 5 ? ({color:'red'}) : ({color:'green'}) }>CSS-inline dinâmico</h2>

      <h2 style={n > 5 ? ({color:'red'}) : ({color:'green'}) }>CSS-inline dinâmico</h2>
    </div>
  );
}
export default App;
