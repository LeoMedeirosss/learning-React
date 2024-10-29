const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
      <h2>Detalhes do Usuário</h2>
    <ul>
        <li>Nome = {nome} </li>
        <li> idade = {idade} </li>
        <li>profissao = {profissao} </li>
    </ul>

        {idade >= 18 ? (
            <div>
                <p>Pode tirar carteira</p>
            </div>
        ) : (
            <div>
                <p>Não pode tirar carteira</p>
            </div>
        )}
    </div>
  )
}

export default UserDetails
