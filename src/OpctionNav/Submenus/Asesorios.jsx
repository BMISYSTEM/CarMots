import { useState,useRef } from 'react'
import useBpsystem from '../../hooks/useBpsystem'
import {useVehiculos } from '../../hooks/useVehiculos'
import {useMarcas} from '../../hooks/useMarcas'
import {useModelos} from '../../hooks/useModelos'
import {useEstados} from '../../hooks/useEstados'
import { toast } from 'react-toastify'
import { useAsesorios } from '../../hooks/useAsesorios'
import Loading from '../../Componentes/Loading'



const initialValues = 
{
  archivo:null,
  nombreArchivo:'',
  archivoUrl:''

}
export default function Asesorios() {


  //captura de ARCHIVOS---------------------------------------------
  const [fotoone,setFotoone] = useState(initialValues)
  const [fototo,setFototo] = useState(initialValues)
  const [fototree,setFotree] = useState(initialValues)
  const [fotofor,setFofor] = useState(initialValues)
  const [fotoperitaje,setPeritaje] = useState(initialValues)

  const {modonoche} = useBpsystem()
  const {marcas,isLoading} = useMarcas()
  const {modelosdata,loadingModelos} = useModelos()
  const {estadosall,estadosloading} = useEstados()
  const {createasesorios,errores} = useAsesorios()

//captura de inputs---------------------------------------------------
  const nombre = useRef('')
  const kilometraje = useRef('')
  const descripcion = useRef('')
  const marca = useRef('')
  const modelo = useRef('')
  const estado= useRef('')
  const valor= useRef('')
//---------------------------------------------------------------------

if (isLoading || estadosloading){
  return (
    <Loading/>
  )
}
if(errores?.response?.data?.errors)
{   const error = errores?.response?.data?.errors
    const mensajes = {
        'marca':error.marcas,
        'estados':error.estados,
        'nombre':error.nombre,
        'descripcion':error.descripcion,
        'valor':error.valor,
    }
  
    const mensajeerror = Object.values(mensajes)
    mensajeerror.forEach(error => {
        if(error){
        toast.error(error[0])}
    });
}
//asignacion de archivos-------------------------------------------
const foto1 = (e) => 
  {
    
    setFotoone(
      {     
        archivo: e.target.files[0],
        nombreArchivo: e.target.files[0].name,
      }
    )
  }
const foto2 = (e) => 
  {
    
    setFototo(
      {     
        archivo: e.target.files[0],
        nombreArchivo: e.target.files[0].name,
      }
    )
  }
const foto3 = (e) => 
  {
    
    setFotree(
      {     
        archivo: e.target.files[0],
        nombreArchivo: e.target.files[0].name,
      }
    )
  }
  const handleclick = (e) =>{
    e.preventDefault()

    const data = {
      descripcion:descripcion.current.value,
      marcas:marca.current.value,
      estados:estado.current.value,
      valor:valor.current.value,
      foto1:fotoone,
      foto2:fototo,
      foto3:fototree,
      nombre:nombre.current.value
    }
    createasesorios(data)
    // console.log(data)
    toast.success("guardando Asesorio")
  }
  return (
    <>
    <div className=' w-auto h-full p-3 flex flex-row gap-2'>
        {/* informacion del vehiculo */}
        <div className='border-2 border-slate-200 w-full h-auto rounded-xl p-3 flex flex-col gap-3'>

            <form className='flex flex-col gap-2 w-full text-center justify-center items-center'
            onSubmit={handleclick} >
                <label htmlFor="">Marca</label>
                <select name="" id="" 
                ref={marca}
                className= {`${modonoche ? "bg-black text-white border-slate-900": "bg-white border-slate-900"} block w-2/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                  sm:text-sm sm:leading-6 text-center`}>
                    <option defaultValue="" selected>--Seleccione--</option>
                    {marcas.marcas.map(row=>(
                      <option value={row['id']}>{row['nombre']}</option>
                    ))}
                </select>
                
                <label htmlFor="">Estados</label>
                <select name="" id="" 
                ref={estado}
                className= {`${modonoche ? "bg-black text-white border-slate-900": "bg-white border-slate-900"} block w-2/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                  sm:text-sm sm:leading-6 text-center`}>
                    <option defaultValue="" selected>--Seleccione--</option>
                    {estadosall.estados.map(row=>(
                      <option value={row['id']}>{row['estado']}</option>

                    ))}
                    
                </select>
                <label htmlFor="">Nombre</label>
                <input type="text" className= {`${modonoche ? "bg-black text-white border-slate-900": "bg-white border-slate-900"} block w-2/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-slate-500 placeholder:text-gray-400 text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600
                  sm:text-sm sm:leading-6`}
                  ref={nombre}/>
                <label htmlFor="">Descripcion</label>
                <textarea name="" id="" cols="25" rows="1" className= {`${modonoche ? "bg-black text-white border-slate-900": "bg-white border-slate-900"} block w-2/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-slate-500 placeholder:text-gray-400 focus:ring-2 text-center focus:ring-inset focus:ring-indigo-600
                  sm:text-sm sm:leading-6`}
                  ref={descripcion}></textarea>
                <label htmlFor="">Valor</label>
                <input type="number" className= {`${modonoche ? "bg-black text-white border-slate-900": "bg-white border-slate-900"} block w-2/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-slate-500 placeholder:text-gray-400 focus:ring-2 text-center focus:ring-inset focus:ring-indigo-600
                  sm:text-sm sm:leading-6`}
                  ref={valor}/>
                
                
                <input type="submit" value={'Terminar Registro'} className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer'/>

            </form>


        </div>
        {/* archivos del vehiculo */}
        <div className='border-2 border-slate200 w-full h-auto rounded-xl p-3 flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-xl font-bold'>Archivos Adjuntos</h1>
            <div className=' flex flex-col w-1/2 text-center relative bg-sky-500 rounded-lg p-1 hover:bg-sky-800 cursor-pointer'>
             <label htmlFor="" className='text-white  absolute w-full'>Foto 1</label>
             <input type="file" onChange={foto1} className='text-white rounded-sm  w-full h-full opacity-0 cursor-pointer' />
            </div>
            <div className=' flex flex-col w-1/2 text-center relative bg-sky-500 rounded-lg p-1 hover:bg-sky-800 cursor-pointer'>
             <label htmlFor="" className='text-white  absolute w-full'>Foto 2</label>
             <input type="file" onChange={foto2} className='text-white rounded-sm  w-full h-full opacity-0 cursor-pointer' />
            </div>
            <div className=' flex flex-col w-1/2 text-center relative bg-sky-500 rounded-lg p-1 hover:bg-sky-800 cursor-pointer'>
             <label htmlFor="" className='text-white  absolute w-full'>Foto 3</label>
             <input type="file" onChange={foto3} className='text-white rounded-sm  w-full h-full opacity-0 cursor-pointer' />
            </div>
            


        </div>


    </div>
    
    </>
  )
}
