import { useState } from 'react'



const ListRender = () => {

    const [list] = useState(["nome1", "nome2", "nome3"]);

    const [users] = useState([
        {id:1, name:"João", age:31},
        {id:2, name:"nome2", age:19},
        {id:3983, name:"Pedro", age:49},
    ])

    return (
    <div>
        <ul>
            {list.map((item, i) => (<li key={i}>{item}</li>))}
        </ul>
        <ul>
            {users.map((users)=>(
                <li key={users.id}> {users.name} - {users.age}</li>
            ))}
        </ul>
    </div>
    )
}

export default ListRender
