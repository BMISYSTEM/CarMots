import { useRef, useState } from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { toast } from 'react-toastify'
import { useClientes } from '../hooks/useClientes'

const initialValues = 
{
  archivo:null,
  nombreArchivo:'',
  archivoUrl:''

}
export default function Recepcion() {
  const url = import.meta.env.VITE_API_URL
  const {modonoche,handleClickModalVehiculos,vehiculoseleccionado,hndelclickmodalseguimiento} = useBpsystem()
  const {createclientes,errores,setErrores,consulta,cliente} = useClientes()
  const vf = useRef()
  const ti = useRef()
  const nc = useRef()
  const cm = useRef()
  const nombre = useRef()
  const apellido = useRef()
  const cedula = useRef()
  const data = useRef()
  const telefono = useRef('')
  const telefonoconsulta = useRef('')
  const email = useRef('')
  const emailbusqueda = useRef('')
  const [vehiculo,setvehiculo] = useState()
  const [cedulas,setcedula] = useState(initialValues)
  const [estartos,setestratos] = useState(initialValues)
  const [declaracion,setdeclaracion] = useState(initialValues)
  const [solicitudcredito,setsolicituccredito] = useState(initialValues)
  const [cuotam,setCuotam] = useState(0)
  const [valorf,setvalorf] = useState(0)
  const [tasa,settasa] = useState(0)
  const [cuotas,setCuotas] = useState(0)
  const [formulario,setformulario] = useState(0)
  const [clientebusqueda,setcliente] = useState(0)
  const [clientecreado,setclientecreado] = useState(0)
  if(errores){
    const arrayerror = [errores.nombre,errores.apellido,errores.cedula,errores.data,
      errores.telefono,errores.email,errores.vehiculo]
    arrayerror.forEach(element => {
      if(element){
        toast.error(element[0])
      }
      setErrores('')
    });
  }
  const capturacedula = (e) => 
  {
    setcedula(
      {     
        archivo: e.target.files[0],
        nombreArchivo: e.target.files[0].name,
      }
    )
  }
  const capturaestratos = (e) => 
  {
    setestratos(
      {     
        archivo: e.target.files[0],
        nombreArchivo: e.target.files[0].name,
      }
    )
  }
  const capturadeclaracion = (e) => 
  {
    setdeclaracion(
      {       
        archivo: e.target.files[0],
        nombreArchivo: e.target.files[0].name,
      }
    )
  }
  const capturasolicitud = (e) => 
  {
    setsolicituccredito(
      {       
        archivo: e.target.files[0],
        nombreArchivo: e.target.files[0].name,
      }
    )
  }
  if(clientecreado){
    console.log(clientecreado)
  }

  // envio de datos al back
  const vehiculos = vehiculoseleccionado.id
  const handleclicRecepcion = (e) =>
  {
    e.preventDefault()
    const date = {
      nombre:nombre.current.value,
      apellido:apellido.current.value,
      cedula:cedula.current.value,
      data:data.current.value,
      telefono:telefono.current.value,
      email:email.current.value,
    }
    createclientes(date,setclientecreado)
    // console.log(date)
    toast.success('registrando el cliente')
  } 
  if(clientebusqueda)
  {
    hndelclickmodalseguimiento(clientebusqueda.id)
    setcliente(0)
  }else if(clientebusqueda == undefined){
    toast.warning('el cliente no existe, registrelo')
    setformulario(!formulario)
    setcliente(0)
  }
  const handleclickconsultar = async() =>
  {
    const telefono = telefonoconsulta.current.value
    const email = emailbusqueda.current.value
     consulta(telefono,email,setcliente);
    toast.success('consultando...')
    setcliente(0)
    // setformulario(!formulario)
  }

  return (
    <>
     
      <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
       md:h-full h-auto w-full flex md:flex-row flex-col`} >

        <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} 
        md:w-full w-full md:h-auto h-full m-2 rounded-xl shadow p-10 flex flex-col items-center justify-center`}>
          
          <div className={'w-1/2'}>
          <h1 
              className='text-center font-bold  text-xl'
              >Cliente</h1>
              <button className='p-2 rounded-xl bg-sky-800 text-white font-bold'
              onClick={()=>handleclickconsultar()}>Crear o Consultar</button>
              <div className={`${!formulario ? "":"hidden"}`}>
              <label className='text-lg '>Telefono</label>
                <input type="text" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`}
                        ref={telefonoconsulta}/>
                        <label className='text-lg '>Correo</label>
                <input type="text" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`} 
                        ref={emailbusqueda}/>
              </div>
              <form className={`${formulario? "": "hidden"} flex flex-col p-3`}
              onSubmit={handleclicRecepcion}>
                <label className='text-lg '>Nombre</label>
                <input type="text" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`}
                        ref={nombre}/>
                <label className='text-lg '>Apellido</label>
                <input type="text" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`}
                        ref={apellido}/>
                <label className='text-lg '>Cedula</label>
                <input type="number" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`}
                        ref={cedula}/>
                <label className='text-lg '>Fecha nacimiento</label>
                <input type="date" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`}
                        ref={data}/>
                <label className='text-lg '>Telefono</label>
                <input type="number" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`}
                        value={telefonoconsulta.current.value}
                        ref={telefono}/>
                <label className='text-lg '>Correo</label>
                <input type="email" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6 px-2`}
                        value={emailbusqueda.current.value}
                        ref={email}/>
                <input type="submit" value="Registrar" 
                            className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer' />
                </form>
              </div>
          </div>
      </div>
   
    
    </>
  )
}
