import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import useSWR from 'swr';
import "react-toastify/dist/ReactToastify.css"
import clienteAxios from '../conffig/axios';

const BpsystemContext = createContext();
const BpsystemProvider = ({ children }) => {
  const token = localStorage.getItem('TOKEN_USER')
  
  const [clienteModal, setclienteModal] = useState(false)
  const [usuariosModal, setusuariosModal] = useState(false)
  const [vehiculosModal, setVehiculosModal] = useState(false)
  const [seguimientoModal, setseguimientoModal] = useState(false)
  const [editarclientesfinanciera, seteditarclientesfinanciera] = useState(false)
  const [UsuariosPermisosModal, setUsuariosPermisosModal] = useState(false)
  const [ClientesCentrofinanciero, setClientesCentrofinanciero] = useState(false)
  const [permisos, setPermisos] = useState([])
  const [componente, setComponente] = useState('')
  const [modeloserror, setModeloserror] = useState('')
  const [estadoserror, setEstados] = useState('')
  const [vehiculoserrores, setVehiculos] = useState('')
  const [menuloading, setmenucarga] = useState(false)
  const [vehiculoseleccionado, setSelectvehiculo] = useState('')
  const [asesoriosseleccionados, setasesorios] = useState([])
  const [asesorios, seleccion] = useState([])
  const [clienteseleccionado, setclienteseleccionado] = useState('')
  const [usuarioseleccionado, setUsuarioseleccionado] = useState('')
  const [UsuarioSeleccionPermisos, setUsuarioSeleccionPermisos] = useState('')
  const [clienteselecciondocumentos, setclienteselecciondocumentos] = useState('')
  const [clienteseleccionediccion, setclienteseleccionediccion] = useState('')
  const [clienteseleccionseguimiento, setclienteseleccionseguimiento] = useState('')
  const [usuariosall, setUsuarios] = useState([])


  //documento pdf financiero
  const [financiero,setfinanciero] = useState([])
  const [documentacion,setdocumentacion] = useState([])
  const [matricula,setmatricula] = useState([])
  const [retomas,setretoma] = useState([])



  //datos de swrs
  const [marcas,setmarcas] = useState({})
  // modo noche
  const [modonoche, setModonoche] = useState(false)
  //states de marcas 
  const [insertmarca, setInsertMarca] = useState()
  
  //guardar datos para documento pdf

  const handleclickfinanciero = (data) =>
  {
    setfinanciero(data)
  }
  const handleclickdocumentacion = (data) =>
  {
    setdocumentacion(data)
  }
  const handleclickmatriculas = (data) =>
  {
    setmatricula(data)
  }
  const handleclickretoma = (data) =>
  {
    setretoma(data)
  }
  
  const handleClickModalCliente = (id) => {
    setclienteseleccionado(id)
    setclienteModal(!clienteModal)
  }
  const handleClickModalUsuario = (id) => {
    setUsuarioseleccionado(id)
    setusuariosModal(!usuariosModal)
  }
  const handleClickModalVehiculos = () => {
    setVehiculosModal(!vehiculosModal)
  }
  const handleclickModalUsuariosPermisos = () => {
    setUsuariosPermisosModal(!UsuariosPermisosModal)
  }
  const handleclickModalClienteCentrofinanciero = (id) => {
    setclienteselecciondocumentos(id)
    setClientesCentrofinanciero(!ClientesCentrofinanciero)
  }
  const handleclickeditarclientefinanciera = (id) => {
    setclienteseleccionediccion(id)
    seteditarclientesfinanciera(!editarclientesfinanciera)
  }
  const hndelclickmodalseguimiento = (id) => 
  {
    setclienteseleccionseguimiento(id)
    setseguimientoModal(!seguimientoModal)
  }
  const asesorioslista = (data) => 
  {
    setasesorios(asesoriosseleccionados.concat(data))
  }
  const remplaceasesorioslista = (data) => 
  {
    setasesorios(data)
  }

  return (
    <BpsystemContext.Provider
    value={{
      retomas,
      matricula,
      financiero,
      documentacion,
      handleclickfinanciero,
      handleclickdocumentacion,
      handleclickmatriculas,
      handleclickretoma,
      remplaceasesorioslista,
      clienteModal,
      handleClickModalCliente,
      handleClickModalUsuario,
      usuariosModal,
      componente,
      setModonoche,
      modonoche,
      setPermisos,
      handleClickModalVehiculos,
      vehiculosModal,
      setmenucarga,
      menuloading
      ,vehiculoseleccionado,
      setSelectvehiculo,
      clienteseleccionado,
      usuarioseleccionado,
      setUsuariosPermisosModal,
      UsuariosPermisosModal,
      handleclickModalUsuariosPermisos,
      UsuarioSeleccionPermisos,
      setUsuarioSeleccionPermisos,
      ClientesCentrofinanciero,
      setClientesCentrofinanciero,
      handleclickModalClienteCentrofinanciero,
      setclienteselecciondocumentos,
      clienteselecciondocumentos,
      seteditarclientesfinanciera,
      editarclientesfinanciera,
      handleclickeditarclientefinanciera,
      clienteseleccionediccion,
      hndelclickmodalseguimiento,
      setseguimientoModal,
      seguimientoModal,
      clienteseleccionseguimiento,
      setasesorios,
      asesoriosseleccionados,
      asesorioslista,
      }}
      >{children}</BpsystemContext.Provider>
  )
}

export {
  BpsystemProvider
}
export default BpsystemContext