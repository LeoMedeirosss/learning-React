import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//componentes
import Navbar from './components/Navbar';
import Searchform from './components/Searchform';

//paginas
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <h1>REACT ROUTER</h1>
        <h3>Aprendendo Rotas</h3>
        <BrowserRouter>
        <Navbar/>
        <Searchform/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/products/:id' element={<Product />}/>
            <Route path="/products/:id/info" element={<Info />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='company' element={<Navigate to="/about"/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;