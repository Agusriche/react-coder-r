import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import{auth, db} from '../FirebaseConfigs/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import './Singup.css'

const Singup = () => {
  
  const [username, setUserName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState ("")
  const [successMsg, setSuccessMsg] = useState("")

  const handlerSubmit = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      const initialcartvalue = 0;
      console.log(user);

      addDoc(collection(db,"users"),{
        username: username, email: email, phonenumber: phonenumber, password: password, cart: initialcartvalue, address:address,uid: user.uid
        }) .then(()=>{
        setSuccessMsg('Nuevo usuario creado, seras redireccionado a la pantalla de inicio :)')
        setUserName('')
        setPhoneNumber('')
        setEmail('')
        setPassword('')
        setErrorMsg('')
        setTimeout(()=>{
          setSuccessMsg('');
          navigate('/login');
        },4000);

       })
       .catch((error)=>{setErrorMsg(error.message)});
    })
    .catch ((error)=>{
      if(error.message == 'Firebase: Error (auth/invalid-email).'){
        setErrorMsg('Por favor llene todos los campos requeridos')
      }
      if (error.message == 'Firebase: Error (auth/email-already-in-use).'){
        setErrorMsg('User already exist');
      }
    })
  
  }
  
  return (
    <div>
       <Navbar/>
       <p>Singup</p>
       

       <div className='singup-container'> 

          <form className='singup-form' onSubmit={handlerSubmit}>
            <p> Crear cuenta</p>


            {successMsg&&<>
            <div className='success-msg'> {successMsg}
            </div></>
            }
            {errorMsg&& <>
            <div className='error-msg'>
              {errorMsg}
              </div></>
              }
            <label>Nombre</label>
            <input onChange={(e)=>setUserName(e.target.value)} type='text' placeholder='nombre completo'/>
            <label>Numero</label>
            <input onChange={(e)=>setPhoneNumber(e.target.value)} type='Number' placeholder='Numero'/>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type='Email' placeholder='Email'/>
            <label>Contraseña</label>
            <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Contraseña'/>
            <label>Direccion</label>
            <input onChange={(e)=>setAddress(e.target.value)} type='text' placeholder='Direccion'/>


            <button>Sing up!</button>

            <div>
              <span>
                ¿Ya tienes una cuenta?
              </span>  
              <Link to='/login'>Sign in</Link>
            </div>        
          </form>
       </div>
    </div>
  )
}

export default Singup