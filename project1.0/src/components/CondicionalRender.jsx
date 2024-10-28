import { useState } from "react"


const CondicionalRender = () => {

    const[x] = useState(false);

    const[nome, setNome] = useState("João")

  return (
    <div>
        <h1>O texto será exibido?</h1>

        {x && <p>Se x for = true, sim!</p>}
        {!x && <p>x é = false.</p>}


        <h1>If Ternário</h1>
        {nome === "Pedro" ? (
          <div>
            <p>O nome é Pedro</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado</p>
          </div>
        )}

        <button onClick={() => setNome("Pedro")}>Aperte</button>
    </div>
  )
}

export default CondicionalRender
