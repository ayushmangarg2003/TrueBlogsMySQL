import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
import Navbar from "../components/Navbar";

const Login = () => {
  const [inputs , setInputs] = useState({
    username:"",
    password:""
  })

  const navigate = useNavigate()

  const {login} = useContext(AuthContext);

  const[error , setError] = useState(null);

  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')

    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <>
    <Navbar/>
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" name='username' placeholder='username' onChange={handleChange} />
        <input required type="password" name='password' placeholder='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
          {error && <p>{error}</p>
}        <span>New here? <Link to='/register'>Register</Link></span>
      </form>
    </div>
    </>
  )
}

export default Login
