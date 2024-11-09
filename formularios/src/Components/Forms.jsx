import { useState } from 'react'
import './Forms.css'

const Forms = () => {
  const {nome, setNome} = useState()
  const {email, setEmail} = useState()

  const handleNome = (e) =>{
    setNome(e.target.value)
  };

  return (
    <div>
      <form>
        <div>
            <label htmlFor="nome">Nome: </label>
            <input type="text" name='nome' 
            placeholder='Digite seu nome' 
            onChange={handleNome} />
        </div>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' 
          placeholder='Digite o seu e-mail' 
          onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Forms
