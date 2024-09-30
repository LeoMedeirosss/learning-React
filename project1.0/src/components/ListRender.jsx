import { useState } from 'react'



const ListRender = () => {

    const [list] = useState(["nome1", "nome2", "nome3"]);

    return (
    <div>
        <ul>
            {list.map((item) => (<li>{item}</li>))}
        </ul>
    </div>
    )
}

export default ListRender
