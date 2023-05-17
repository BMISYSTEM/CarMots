import {createContext,useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import clienteAxios from '../conffig/axios';

const BpsystemContext = createContext();
const BpsystemProvider = ({children}) =>{
  const token = localStorage.getItem('TOKEN_USER')
  const [clienteModal,setclienteModal] = useState(false)
  const [usuariosModal,setusuariosModal] = useState(false)
  const [permisos,setPermisos] = useState([])
  const [componente,setComponente] = useState('')
  // modo noche
  const [modonoche,setModonoche] = useState(false)

  //consultar la base de datos para traer los permisos
 


  const handleClickModalCliente = () =>{
    setclienteModal(!clienteModal)
  }
  const handleClickModalUsuario = () =>{
    setusuariosModal(!usuariosModal)
  }


  return (
    <BpsystemContext.Provider   
        value={{
          clienteModal,
          handleClickModalCliente,
          handleClickModalUsuario,
          usuariosModal,
          componente,
          setModonoche,
          modonoche,
          setPermisos
          
        }}
    >{children}</BpsystemContext.Provider>
)
}

export {
  BpsystemProvider
}
export default BpsystemContext