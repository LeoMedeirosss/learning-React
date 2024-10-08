import { useState } from 'react'



const ListRender = () => {

    const [list] = useState(["nome1", "nome2", "nome3"]);

    const [users, setUsers] = useState([
        {id:1, name:"João", age:31},
        {id:2, name:"nome2", age:19},
        {id:3, name:"Pedro", age:49},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((users) => randomNumber !== users.id)

        })
    }

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
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
    )
}

export default ListRender
