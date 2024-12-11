import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Products = () => {

  const {id} = useParams();

  const url = "http://localhost:3000/products/" + id
  const {data: product, loading, error} = useFetch(url)

  return( <>
        <p>id do produto: {id}</p>
        {error && <p>ocorreu um erro...</p>}
        {loading && <p>Carregando</p>}
        {product && (
            <div>
              <h1>{product.name}</h1>
              <h3>R${product.price}</h3>
            </div>
        )}
    </>
  )
}

export default Products
