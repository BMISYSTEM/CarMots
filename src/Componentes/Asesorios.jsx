import React, { useState } from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { useAsesorios } from '../hooks/useAsesorios'
import Loading from './Loading'
import { toast } from 'react-toastify'

export default function Asesorios() {
  const url = import.meta.env.VITE_API_URL
  const {modonoche,asesorioslista}= useBpsystem()
  const {asesoriosall,asesoriosloading} = useAsesorios()
  const [array,setArray] = useState([])
  const [busqueda,setbusqueda] = useState('')
  if(asesoriosloading)
  {
    return (
        <Loading />
    )
  }
  let asesorios = asesoriosall
  if(busqueda.length > 0 )
  {
    asesorios = asesorios.filter(asesorio => {
      if(
        asesorio.nombre.toString().toLowerCase().includes(busqueda.toLocaleLowerCase())||
        asesorio.marca.toString().toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        asesorio.estado.toString().toLowerCase().includes(busqueda.toLocaleLowerCase())
      ){

        return asesorio

      }
    })
  }
  return (
    <div className= {`${modonoche ? "bg-black text-white":"bg-white text-slate-600" } mr-64w-full h-full m-0  rounded-xl  flex flex-col gap-2 p-5  `}>
   
       <div className='flex flex-row w-full justify-between items-center px-10'>
       <div className='relative flex item-center text-gray-400 focus-within:text-gray-800 border-b-2 border-slate-200'>
                    {/* imagen */}
                    <div className='absolute w-5 h-5 ml-3 pointer-events-none p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input 
                        type="text"
                        name='shear'
                        placeholder='Busqueda'
                        className='w-full pr-3 pl-16 rounded-xl h-full p-3 focus:border-sky-400 bg-transparent'
                        onChange={(e)=>setbusqueda(e.target.value)}
                     />
                </div>
  
       </div>
       

        {/* contenedor de imagenes */}
       <div className='grid grid-cols-3 gap-2 text-center rounded-xl  mt-4  overflow-auto'>
        {asesorios.map(asesorio=> 
          <div key={asesorio.id} className=' w-auto h-auto flex flex-col rounded-xl shadow-xl border-2'>
          <div className='w-64 h-auto shadow cursor-pointer '>
              <img src={url+"/storage/asesorios/"+ asesorio['foto1']} className='rounded-xl shadow-xl' alt="" />
          </div>
          <div className='mb-0'>
            
              <p className='font-bold text-xl'>Nombre</p>
              <p>{asesorio.nombre}</p>
              <p className='font-bold text-xl'>Marca</p>
              <p>{asesorio.marca}</p>
              <p className='font-bold text-xl'>Estado</p>
              <p>{asesorio.estado}</p>
              <p className='font-bold text-xl'>Valor</p>
              <p className='text-lg font-bold text-amber-500'>{asesorio.valor}</p>
              <button 
          onClick={()=> 
           { 
            const id = asesorio.id
            const marca = asesorio.marca
            const estado = asesorio.estado
            const valor = asesorio.valor
            const nombre = asesorio.nombre
            const arr = {
              id:id,
              marca:marca,
              estado:estado,
              valor:valor,
              nombre:nombre
            }
            asesorioslista(arr)
            toast.success('agregado a la cotizacion')
          
          }
          }
          className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer mb-2'>
              Seleccionar Asesorio
              </button>
          </div>
      </div>
          
          
          )}
       
            </div>


       
    </div>
  )
}
