import {createContext,useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import clienteAxios from '../conffig/axios';

const BpsystemContext = createContext();
const BpsystemProvider = ({children}) =>{
  const [clienteModal,setclienteModal] = useState(false)
  const [usuariosModal,setusuariosModal] = useState(false)
  const [componente,setComponente] = useState('')
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
            componente
        }}
    >{children}</BpsystemContext.Provider>
)
}

export {
  BpsystemProvider
}
export default BpsystemContext