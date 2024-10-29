const ChangeMensagemState = ({ handleMensagem }) => {

    const messages = ["olá", "oi", "hello"]

  return (
    <div>
      <button onClick={() => handleMensagem(messages[0])}>1</button>
      <button onClick={() => handleMensagem(messages[1])}>2</button>
      <button onClick={() => handleMensagem(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMensagemState
