import logo from './logo.svg';
import './App.css';
import City from "./assets/img-city2.jpeg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUsername from './components/ShowUsername';
import DetailsExample from './components/DetailsExample';
import { useState } from 'react';

function App() {
  const [username] = useState("Rodolfo");

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

        <ManageData />

        <ListRender />

        <CondicionalRender />

        <ShowUsername nome={username}/>

        <DetailsExample marca="LV" cor="Azul" preco={10000} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
