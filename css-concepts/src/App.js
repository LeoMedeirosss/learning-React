import logo from './logo.svg';
import './App.css';
import Exemplo from './components/Exemplo';
import Modulo from './components/Modulo';

function App() {
  const n = 10

  const titulo = true

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

      <h2 className={titulo ? "titulo" : "nao-titulo"}>Classes dinâmicas</h2>

      <h2>CSS Module</h2>
      <Modulo />
      <p className='modulo'>teste de classe</p>
    </div>
  );
}
export default App;
