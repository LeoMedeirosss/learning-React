import './App.css';
import { useState, useEffect } from "react";
import {useFetch} from "./hooks/useFetch"

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const {data: items, httpConfig, loading, error} = useFetch(url);

  //useEffect(() => {
  // const fetchData = async () => {
  //    try {
  //      const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.error("Erro ao buscar produtos:", error);
  //   }
  // };
  //
  // fetchData();
  //}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

  //  const res = await fetch(url, {
  //  method: "POST",
    //  headers: {
      //  "Content-Type": "aplication/json"
   //   },
   //   body: JSON.stringify(product),
    //});

    //const addedProducts = await res.json()

    //setProducts((prevProducts) => [... prevProducts, addedProducts])
    httpConfig(product,"POST")
    setName("")
    setPrice("")
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <div className="conteiner">
        <h1>Aprendendo HTTPS Json</h1>
        <h2>Lista de produtos</h2>
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li> 
          ))}
        </ul>
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" 
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
              Preço:
              <input type="number" 
              value={price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)} />
            </label>
            {loading && <input type="submit" disabled value="Aguarde"/>}
            {!loading && <input type="submit" value="Criar"/>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;