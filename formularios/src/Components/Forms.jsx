import { useState } from 'react'
import './Forms.css'

const Forms = (user) => {
  const [nome, setNome] = useState(user ? user.nome : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const handleNome = (e) =>{
    setNome(e.target.value)
  };

  const [bio, setBio] = useState(user ? user.bio : '')
  const[role, setRole] = useState(user ? user.role : '')

  const handleSubmit = (evento) =>{
    evento.preventDefault();
    console.log("Forms enviado");
    console.log(nome, email, bio, role);

    setNome('');
    setEmail('');
    setBio('');
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
        <label>
          <span>Biografia:</span>
        </label>
        <textarea name="bio" 
        placeholder='Descrição do usuário'
        onChange={(e) => setBio(e.target.value)} 
        value={bio}
        ></textarea>
        <label>
          <span>Função no sistema</span>
          <select name="role" id="role"
          onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="Admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Forms
