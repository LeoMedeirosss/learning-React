import { useState } from "react"


const CondicionalRender = () => {

    const[x] = useState(false);

  return (
    <div>
        <h1>O texto será exibido?</h1>

        {x && <p>Se x for = true, sim!</p>}
        {!x && <p>x é = false.</p>}

    </div>
  )
}

export default CondicionalRender
