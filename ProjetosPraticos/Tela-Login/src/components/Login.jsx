import './Login.css'

import {FaUser, FaLock} from 'react-icons/fa';

import {useState} from 'react';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        alert(`Usuário: ${userName} \nSenha: ${password} \nEnviado!`);

    }


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className='input-field'>
                    <input type="email" placeholder='E-mail' onChange={(e)=> setUserName(e.target.value)}/>
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className='icon'/>
                </div>

                <div className="recall-forget">
                    <label >
                        <input type="checkbox" />
                        Lembrar-me?
                    </label>
                    <a href="#">Esqueci a senha</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login