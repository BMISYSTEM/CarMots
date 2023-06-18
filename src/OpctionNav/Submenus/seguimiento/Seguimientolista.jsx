import React, { useState } from 'react'
import { usePendientes } from '../../../hooks/usePendientes'
import { useEstados } from '../../../hooks/useEstados'
import { useSeguimiento } from '../../../hooks/useSeguimiento'
import useBpsystem from '../../../hooks/useBpsystem'
import Loading from '../../../Componentes/Loading'

export default function Seguimiento () {
    const {hndelclickmodalseguimiento} = useBpsystem()
  const {seguiminentoall,seguiminetoloading} = useSeguimiento()
  const {estadosall,estadosloading} = useEstados()
  const [busqueda,setbusqueda] = useState('')
  if(seguiminetoloading|| estadosloading)
  {
    return (
      <Loading/>
    )
  }
  const estados = estadosall.estados
  let seguimientos = seguiminentoall?.data
  // console.log(seguimientos)
  if(busqueda.length>0)
  {
    seguimientos = seguimientos?.filter(seguimiento=> {

      if(
        seguimiento.nombre.toString().toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        seguimiento.email.toString().toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        seguimiento.cedula.toString().toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        seguimiento.telefono.toString().toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        seguimiento.estado.toString().toLowerCase().includes(busqueda.toLocaleLowerCase()) 
      ){
        return seguimiento
      }
    })

  }
  // console.log(seguiminentoall.data)
  return (
    <>
        <div className='w-auto h-full  flex flex-col p-3 overflow-hidden'>
            {/* filtros */}
            <div className='w-full rounded-xl border-2 h-1/6  p-3 items-center flex flex-row gap-4 '>
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
                    
                    <div className='flex flex-row items-center gap-2'>
                        <label htmlFor="" defaultValue={0}>Dias de seguimiento</label>
                        <input type="numer" className='w-12 border-2 rounded-xl' />
                    </div>
                <div >
                    {/* <Link to={'/panel/usuarios/list'}>
                     <button className='p-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-800'>Nuevo</button>
                    </Link> */}
                </div>
            </div>
            {/* listado */}
            <div className=''>
            <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 text-center text-xl'>
                  <td >Nombre</td>
                  <td>Correo</td>
                  <td>Cedula</td>
                  <td>Telefono</td>
                  <td>Estado</td>
                  <td >Comentario</td>
                  <td >fecha</td>
                  <td>Gestionar</td>
                </tr>
              </thead>
              <tbody >
                {seguimientos?.map(seguimientos=>    
                    <tr key={seguimientos['cliente_id']} className=' text-left w-full  border-b-2 border-slate-200  hover:cursor-pointer text-sm'>
                    <td className='text-center items-center'>{seguimientos['nombre']}</td>
                    <td className='text-center items-center'>{seguimientos['email']}</td>
                    <td className='text-center items-center'>{seguimientos['cedula']}</td>
                    <td className='text-center items-center'>{seguimientos['telefono']}</td>
                    <td className='text-center items-center'>{seguimientos['estado']}</td>
                    <td className='text-center items-center'>{seguimientos['comentario']}</td>
                    <td className='text-center items-center'>{seguimientos['fecha']}</td>
                    <td className='flex text-center items-center conten-center justify-center flex-row gap-1 '>
                     <button 
                     onClick={()=> hndelclickmodalseguimiento(seguimientos['cliente_id'])}
                     className='flex text-sm w-10 h-10 p-1 m-1 rounded-full  text-center items-center justify-center bg-sky-800 hover:bg-sky-500 text-white'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                      </svg>

                     </button>
                    </td>
                  </tr>
                   
                   
               )}
              </tbody>
            </table>
            </div>
        </div>
    </>
  )
}

