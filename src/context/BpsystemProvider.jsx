import {createContext,useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import  useSWR  from 'swr';
import "react-toastify/dist/ReactToastify.css"
import clienteAxios from '../conffig/axios';

const BpsystemContext = createContext();
const BpsystemProvider = ({children}) =>{
  const token = localStorage.getItem('TOKEN_USER')
  const [clienteModal,setclienteModal] = useState(false)
  const [usuariosModal,setusuariosModal] = useState(false)
  const [permisos,setPermisos] = useState([])
  const [componente,setComponente] = useState('')
  const [modeloserror,setModeloserror] = useState('')
  const [estadoserror,setEstados] = useState('')
  const [vehiculoserrores,setVehiculos] = useState('')
  // modo noche
  const [modonoche,setModonoche] = useState(false)

//states de marcas 
  const [insertmarca,setInsertMarca] = useState()
 


  const handleClickModalCliente = () =>{
    setclienteModal(!clienteModal)
  }
  const handleClickModalUsuario = () =>{
    setusuariosModal(!usuariosModal)
  }


  //creacion de marcas 
  const marcasinsert = async(data) =>
  {
    try {
      const respuesta = await clienteAxios.post('/api/marca',data,{
        headers:{
          Authorization: `Bearer ${token}`
      }
        
      })
      await mutate()
      console.log(respuesta)
      
    } catch (error) {
      console.log(error)
    }
  }
  //consulta todas las marcas
  const {data:marcas,error,isLoading,mutate:marcasall} = useSWR('/api/index',()=>
       clienteAxios('/api/index',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then(res=>res.data)
      .catch(error => {
        throw Error(error?.response?.data?.errors)
    })
  )


  // -------------------------------------------MODELOS---------------------------------------------

  const createmodelos = async (datos) =>
  {
    try {
      const respuesta = await clienteAxios.post('/api/modelo',datos,{
        headers:{
          Authorization:  `Bearer ${token}`
        }
      })
      await mutateModelos()
      console.log(respuesta)
    } catch (error) {
      setModeloserror(error)
    }
  }


  const {data:modelosdata,error:errorModel,isLoading:loadingModelos,mutate:mutateModelos} = useSWR('/api/modelo',()=>
    clienteAxios('/api/modelo',{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res=>res.data)
      .catch(error => {
        throw Error(error?.response?.data?.errors)
      })
  )
//-------------------------------------------------ESTADOS-----------------------------------------------------------


      const createEstados = async (data) => {
        try {
          const respuesta = await clienteAxios.post('/api/estados',data,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          console.log(respuesta)
          await estadosmutate()
        } catch (error) {
          setEstados(error)
        }
      }


      const {data:estadosall,error:errorEstados,isLoading:estadosloading,mutate:estadosmutate} = useSWR('/api/estados',()=>
      clienteAxios('/api/estados',{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      .then(res=>res.data)
      .catch(
        error=>{
          throw Error(error?.response?.data?.errors)
        }
      )
      )

//-------------------------------------------VEHICULOS------------------------------------------------------------------------------------


        const createVehiculos = async(datos) => 
        { try {
          const respuesta = await clienteAxios.post('/api/vehiculos',datos,
          {
            headers:{
              'Content-Type':'multipart/form-data',
              Authorization:`Bearer ${token}`}
          }
          )
          // await vehiculosmute()
        } catch (error) {
          setVehiculos(error)
        }
           

        }
      //   const {data:vehiculosall,error:errorvehiculos,isLoading:vehiculosloading,mutate:vehiculosmute} = useSWR('/api/vehiculos',()=>
      // clienteAxios('/api/vehiculos',{
      //   headers:{
      //     Authorization:`Bearer ${token}`
      //   }
      // })
      // .then(res=>res.data)
      // .catch(
      //   error=>{
      //     throw Error(error?.response?.data?.errors)
      //   }
      // )
      // )
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
          setPermisos,
          marcasinsert,
          marcas,
          isLoading,
          createmodelos,
          loadingModelos,
          errorModel,
          modelosdata,
          modeloserror,
          setModeloserror,
          estadoserror,
          createEstados,
          estadosloading,
          estadosall,
          // vehiculosall,
          // vehiculoserrores,
          // vehiculosloading,
          createVehiculos
        }}
    >{children}</BpsystemContext.Provider>
)
}

export {
  BpsystemProvider
}
export default BpsystemContext