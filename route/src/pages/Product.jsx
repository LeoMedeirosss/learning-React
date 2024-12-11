import { useParams } from "react-router-dom"

const Products = () => {

  const {id} = useParams();

  return <div>
        <p>id do produto: {id}</p>
    </div>
}

export default Products
