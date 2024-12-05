import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const url = "http://localhost:3000/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(product),
    });

    const addedProducts = await res.json()

    setProducts((prevProducts) => [... prevProducts, addedProducts])

    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <div className="conteiner">
        <h1>Aprendendo HTTPS Json</h1>
        <h2>Lista de produtos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
            {product.name} - R$: {product.price}
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
            <input type="submit" value="Criar"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

