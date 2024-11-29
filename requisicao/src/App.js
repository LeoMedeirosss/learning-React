import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

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

  console.log(products);

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
      </div>
    </div>
  );
}

export default App;

