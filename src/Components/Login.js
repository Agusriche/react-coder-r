import React, {useState} from 'react'
import Navbar from './Navbar'
import './Login.css'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState ("");
  const [successMsg, setSuccessMsg] = useState("");
  const auth=getAuth()  
  const navigate = useNavigate()
// SE ROMPE ACA
  return (
    <div>
       <Navbar/>
       <p>Login</p>
    </div>
  )
}

export default Login