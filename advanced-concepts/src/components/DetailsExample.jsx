const DetailsExample = ({marca, cor, preco}) => {
  return (
    <div>
      <h2>Exemplos de detalhes</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Cor: {cor}</li>
        <li>Preço: R$ {preco}</li>
      </ul>
    </div>
  )
}

export default DetailsExample
