import './MyForm.css'
import { useState } from 'react'


const MyForm = ({ userName, email: initialEmail }) => {
    // Gerenciamento de dados

    const [name, setName] = useState(userName || '')
    const [email, setEmail] = useState(initialEmail || '')

    const [bio, setBio] = useState('')
    const [role, setRole] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando o formulário')
        console.log(name, email, bio,role)

        // Limpar formulário
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
        <div>
            {/* Criação de formulário */}
            {/* Envio de formulario */}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name || ''} />
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email || ''} />
                </label>

                {/* textarea */}

                <label >
                    <span>Bio:</span>
                    <textarea name="bio"
                        placeholder='Descrição do usuario'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio || ''}></textarea>
                </label>

                {/* Select */}

                <label >
                    <span>Função:</span>
                    <select name="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role || ''}>
                        <option value="">Selecione uma função</option>
                        <option value="developer">Desenvolvedor</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Gerente</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />

            </form>

        </div>
    )
}

export default MyForm