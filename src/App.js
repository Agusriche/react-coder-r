
import './App.css';
import{ BrowserRouter,RouterProps,Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Singup from './Components/Singup';
import PgFOF from './Components/PgFOF';
import Cart from './Components/Cart';




 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/singup" element={<Singup />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path='/cart' element={<Cart />}/>
        <Route path="*" element={<PgFOF/>}/>
              
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
