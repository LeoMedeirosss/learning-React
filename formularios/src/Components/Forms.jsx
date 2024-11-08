import './Forms.css'

const Forms = () => {
  return (
    <div>
      <form>
        <div>
            <label htmlFor="nome">Nome: </label>
            <input type="text" name='nome' placeholder='Digite seu nome' />
        </div>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite o seu e-mail'/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Forms
