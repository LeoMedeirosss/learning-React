import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import City from "./assets/img-city2.jpeg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUsername from './components/ShowUsername';
import DetailsExample from './components/DetailsExample';
import Fragment from './components/Fragment';
import Conteiner from './components/Conteiner';
import Mensagem from './components/Mensagem';
import ChangeMensagemState from './components/ChangeMensagemState';

function App() {
  const [username] = useState("Rodolfo");

  const details = [
    { id: 1, marca: "Ferrari", cor:"Amarela", preco: 15000},
    { id: 2, marca: "BYD", cor:"Cinza", preco: 17500},
    { id: 3, marca: "Lambo", cor:"Preta", preco: 23000},
  ];

  const [mensagem, setMensagem] = useState("")

  const handleMensagem = (msg) =>{
    setMensagem(msg);
  }

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

        <DetailsExample marca="Gucci" cor="Vermelha" preco={12000}/>
        <DetailsExample marca="Dior" cor="Branca" preco={8500}/>

        {details.map((details) => (
          <DetailsExample 
            marca={details.marca} 
            cor={details.cor} 
            preco={details.preco} 
          />
        ))}

        <Fragment propFragment="teste" />

        <Conteiner>
          <p>conteúdo</p>
        </Conteiner>

        <Mensagem msg={mensagem} />
        <ChangeMensagemState handleMensagem={handleMensagem} />

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
