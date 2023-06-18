import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import Tarjetasvehiculos from './Tarjetasvehiculos'
import { useVehiculos } from '../hooks/useVehiculos'
import Loading from './Loading'
import { useState } from 'react'

export default function ModalVehiculos() {
  const url = import.meta.env.VITE_API_URL

    const {handleClickModalVehiculos,modonoche} = useBpsystem()
    const {vehiculosall,vehiculosloading} = useVehiculos()
    const [busqueda,setbusqueda] = useState('')
    let vehiculos = vehiculosall?.data
    if (vehiculosloading)
    {
        return (
            <Loading/>
        )
    }
    console.log(vehiculos)
  if(busqueda.length>0)
  {
    vehiculos = vehiculos.filter(vehiculo => {
      if(vehiculo.placa.toString().toLowerCase().includes(busqueda.toLowerCase()) || 
      vehiculo.kilometraje.toString().toLowerCase().includes(busqueda.toLowerCase()) || 
      vehiculo.marcas.nombre.toString().toLowerCase().includes(busqueda.toLowerCase()) || 
      vehiculo.valor.toString().toLowerCase().includes(busqueda.toLowerCase())){
          return vehiculo
      }
    })
  }
  return (
    <div className= {`${modonoche ? "bg-black text-white":"bg-white text-slate-600" } mr-64w-full h-full m-0  rounded-xl  flex flex-col gap-2 p-5  `}>
   
       <div className='flex flex-row w-full justify-between items-center px-10'>
        {/* barra buscadora */}
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
                        placeholder='Placa/Valor/Marca/Kilometraje'
                        className='w-full pr-3 pl-16 rounded-xl h-full p-3 focus:border-sky-400 bg-transparent'
                        onChange={(e)=>setbusqueda(e.target.value)}
                     />
                </div>
       </div>
       

        {/* contenedor de imagenes */}
       <div className='grid grid-cols-3 gap-2 text-center rounded-xl  mt-4  overflow-auto'>
            {/* contenedor 1 */}
            {vehiculos?.map(vehiculo=>
               <Tarjetasvehiculos 
               key={vehiculo['id']}
               vehiculo={vehiculo}
               
               />
            )}
           
           
            </div>


       
    </div>
  )
}
