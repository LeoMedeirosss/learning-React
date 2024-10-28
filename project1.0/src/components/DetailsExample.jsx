const DetailsExample = (props) => {
  return (
    <div>
      <h2>Exemplos de detalhes</h2>
      <ul>
        <li>Marca: {props.marca}</li>
        <li>Cor: {props.cor}</li>
        <li>Preço: R$ {props.preco}</li>
      </ul>
    </div>
  )
}

export default DetailsExample
