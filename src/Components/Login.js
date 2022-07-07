import React, {useState} from 'react'
import Navbar from './Navbar'
import './Login.css'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState ('');
  const [successMsg, setSuccessMsg] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();
  // SE ROMPE ESE no se porque :(


  const handleLogin =(e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      
      setSuccessMsg('logeaste!')
      setEmail('')
      setPassword('')
      setErrorMsg('')
      setTimeout(()=>{
        setSuccessMsg('');
        navigate('/home');
      },3000);
    })
  .catch((error)=>{
    const errorCode = error.code;
    console.log(error.message)
    if(error.message == 'Firebase: Error (auth/invalid-email).'){
      setErrorMsg('Please fill all requiere fields')
    }
    if(error.message == 'Firebase: Error (auth/user-not-found).'){
      setErrorMsg('Email not found');
    }
    if(error.message == 'Firebase: Error (auth/wrong-password).'){
      setErrorMsg('Wrong Password');
    }
    
  })
  
  }

  return (
    <div>
       <Navbar/>
       <div className='login-container'> 

          <form className='login-form' >
            <p> Login </p>


            {successMsg&&<>
            <div className='success-msg'> {successMsg}
            </div></>
            }
            {errorMsg&& <>
            <div className='error-msg'>
              {errorMsg}
              </div></>
              }
          
            <input onChange={(e)=>setEmail(e.target.value)} type='Email' placeholder='Email'/>
            <label>Contraseña</label>
          
            <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Contraseña'/>
            <label>Direccion</label>
          

            <button onClick={handleLogin}>Login</button>

            <div>
              <span>
                ¿No tienes una cuenta?
              </span>  
              <Link to='/singup'>Sign up</Link>
            </div>        
          </form>
       </div>
    </div>
  )
}

export default Login