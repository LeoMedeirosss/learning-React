//components
import FirstComponent from "./components/FirstComponent"
import OtherComponent from "./components/OtherComponent"
import TemplateExpressions from "./components/TemplateExpressions";
//styles / css
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>TESTE</h1>

        <div>
          <FirstComponent></FirstComponent>
          <OtherComponent></OtherComponent>
          <TemplateExpressions></TemplateExpressions>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        
        </header>
    </div>
  );
}

export default App;
