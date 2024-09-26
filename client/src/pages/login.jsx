import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const submitForm = async (e) => {
        e.preventDefualt()
        console.log(email, password)
    }

    return (
        <form className="login" onSubmit={submitForm}>
            <h3>Login</h3>
            <label>Email</label>
            <input 
            type="email" 
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
            value ={email}/>
            <label>Password</label>
            <input 
            type="password" 
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
            value ={password}/>
            <button>Login</button>
            </form>
    )
}

export default Login