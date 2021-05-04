
import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setSenha] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)

    let history = useHistory()

    useEffect (()=>{
        if(token['mytoken']){
            history.push('/produtos')
        }
    }, [token])
    
    
    const loginBtn = () => {
        APIService.loginUser({username, password})
        .then (resp => setToken('mytoken',resp.token))
        .catch (error => console.log(error))
    }

    const regBtn = () =>{
        APIService.registerUser({username, password})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    return (     


        <div className="App">
            <br/>
            <br/>
            <h1>Projeto Fullstack</h1>
            <br/>
            <br/>

            {
                isLogin ? <h2>Realize o Login abaixo:</h2>
                : <h2>Crie um novo Login abaixo:</h2>
            }
            
            <br/>
            <div className = "mb-3">
                <label htmlFor="username">Username</label>
                <input type = "text" className = "form-control" id="username" placeholder = "Faça o Login"
                value={username} onChange={e=> setUsername(e.target.value)}
                />
            </div>

            <div className = "mb-3">
                <label htmlFor="password">Senha</label>
                <input type = "password" className = "form-control" id="password" placeholder = "Insira a Senha"
                 value={password} onChange={d=> setSenha(d.target.value)}
                />
            </div>
            
            {
                isLogin ? <button onClick={loginBtn} className = "btn btn-primary">Login</button>
                : <button onClick={regBtn} className = "btn btn-primary">Criar conta</button>
            }

            

            <div className = 'mb-3'>
            <br/>
            {
                isLogin ? <h3>Não está cadastrado? <button className = "btn btn-primary" onClick = {()=>setLogin(false)} >Criar Login</button> </h3>
                : <h3>Já está cadastrado? Faça o login: <button className = "btn btn-primary" onClick = {()=>setLogin(true)} >Login</button></h3> 
            }
            </div>

        </div>
    )
    
}

export default Login
