import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const [inputs , setInputs] = useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()
  const[error , setError] = useState(null);

  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try {
      await axios.post(`http://localhost:4000/api/auth/register`,inputs)
      navigate('/login')

    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" name='username' placeholder='username' onChange={handleChange}/>
        <input required type="email" name='email' placeholder='email' onChange={handleChange} />
        <input required type="password" name='password' placeholder='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {error ? <p>{error}</p> : ""}
        <span>Already User? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register;
