import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//paginas
import Home from './pages/Home'
import About from './pages/About'

//componentes
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
        <h1>REACT ROUTER</h1>
        <h3>Aprendendo Rotas</h3>
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;