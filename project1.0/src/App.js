import logo from './logo.svg';
import './App.css';
import City from "./assets/img-city2.jpeg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className= "Titulo">
          <h1>Advanced</h1>
        </div>

        {/*imagem - public*/}
        <div>
          <img src="img-city1.jpeg" alt="cidade1" />
        </div>

        {/*imagem - assets*/}
        <div>
          <img src={City} alt="cidade2" />
        </div>

        <ManageData></ManageData>

        <ListRender></ListRender>

        <CondicionalRender></CondicionalRender>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
