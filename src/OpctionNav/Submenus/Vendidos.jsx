import React from 'react'
import { useVendidos } from '../../hooks/useVendidos'

export default function Vendidos() {
  const {allvendidos,loadingvendidos,errorvendidos} = useVendidos()
  if(loadingvendidos){
      return (
        <p>cargando informacion</p>
      )
  }

  const ventas = allvendidos.data

  return (
    <>
        <div className='w-auto h-full  flex flex-col p-3 overflow-hidden'>
            {/* filtros */}
            <div className='w-full rounded-xl border-2 h-1/6  p-3 items-center justify-center flex flex-row gap-4 '>
                <div className='relative flex item-center w-1/2 text-gray-400 focus-within:text-gray-800 border-b-2 border-slate-200'>
                    {/* imagen */}
                    <div className='absolute w-5 h-5 ml-3 pointer-events-none p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input 
                        type="text"
                        name='shear'
                        placeholder='Nombre,cedula'
                        className='w-full pr-3 pl-16 rounded-xl h-full p-3 focus:border-sky-400 bg-transparent'
                        // onChange={(e)=>setbusqueda(e.target.value)}
                     />
                </div>
                  
            
            </div>
            {/* listado */}
            <div className='overflow-auto'>
            <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 text-center text-xl'>
                  <td >Cliente</td>
                  <td>Correo</td>
                  <td>Cedula</td>
                  <td>fecha de negocio</td>
                  <td>Vehiculo</td>
                  <td>Valor</td>
                </tr>
              </thead>
              <tbody >
               
                {ventas?.map(ventas=>
                    <tr key={ventas['id']} className=' text-left w-full  border-b-2 border-slate-200  hover:cursor-pointer text-sm'>
                    <td className='text-center items-center'>{ventas['nombre']}</td>
                    <td className='text-center items-center'>{ventas['email']}</td>
                    <td className='text-center items-center'>{ventas['cedula']}</td>
                    <td className='text-center items-center'>{ventas['updated_at']}</td>
                    <td className='text-center items-center'>{ventas['placa']}</td>
                    <td className='text-center items-center'>{ventas['valor']}</td>
                    <td className='text-center items-center flex flex-row gap-1'>
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
