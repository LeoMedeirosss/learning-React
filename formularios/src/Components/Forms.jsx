import { useState } from 'react'
import './Forms.css'

const Forms = (user) => {
  const [nome, setNome] = useState(user ? user.nome : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const handleNome = (e) =>{
    setNome(e.target.value)
  };

  const handleSubmit = (evento) =>{
    evento.preventDefault();
    console.log("Forms enviado");
    console.log(nome, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nome">Nome: </label>
            <input type="text" name='nome' 
            placeholder='Digite seu nome' 
            onChange={handleNome}
            value={nome}
            />
        </div>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' 
          placeholder='Digite o seu e-mail' 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Forms
