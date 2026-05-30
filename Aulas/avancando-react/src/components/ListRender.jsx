import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'Wender']);

    const [users, setUsers] = useState([
        { id: 1, name: 'Wender', age: 31 },
        { id: 2, name: 'Jhonson', age: 38 },
        { id: 3, name: 'Marcelo', age: 40 },
        { id: 4, name: 'Junior', age: 18 },
        { id: 5, name: 'Miguel', age: 24 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 6)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }


    return (
        <div>

            <h2>Trabalhando com listas</h2>

            <div>
                {/* Render sem key */}
                <ol>
                    {list.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
            </div>

            <div>
                {/* Render com Key */}

                <ul>
                    {users.map((user) => <li key={user.id} >Nome: {user.name} - {user.age} anos </li>
                    )}
                </ul>

                {/* Previous state */}

                <button onClick={deleteRandom} type="button">Delete random user</button>

            </div>
        </div>
    )
}

export default ListRender