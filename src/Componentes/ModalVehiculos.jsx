import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import Tarjetasvehiculos from './tarjetasvehiculos'

export default function ModalVehiculos() {
  const url = import.meta.env.VITE_API_URL

    const {handleClickModalVehiculos,modonoche,vehiculosall,vehiculosloading} = useBpsystem()

    if (vehiculosloading)
    {
        return (
            <>
            <h1>Cargando...</h1>
            
            </>
        )
    }
  return (
    <div className= {`${modonoche ? "bg-black text-white":"bg-white text-slate-600" } mr-64w-full h-full m-0 shadow-xl rounded-xl  flex flex-col gap-2 p-5  absolute`}>
        <div className="flex justify-end">
                        <button type="button"
                                onClick={() => handleClickModalVehiculos()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
       <div className='flex flex-row w-full justify-between items-center px-10'>
        <div>
        <label htmlFor="">Marcas</label>
        <select name="" id="">
            <option value="">marca1</option>
            <option value="">marca2</option>
            <option value="">marca3</option>
        </select>

        </div>
        <div>
        <label htmlFor="">modelos</label>
        <select name="" id="">
            <option value="">modelos1</option>
            <option value="">modelos2</option>
            <option value="">modelos3</option>
        </select>
        </div>
       <div>
       <label htmlFor="">estados</label>
        <select name="" id="">
            <option value="">estados1</option>
            <option value="">estados2</option>
            <option value="">estados3</option>
        </select>
       </div>
       </div>
       

        {/* contenedor de imagenes */}
       <div className='grid grid-cols-3 gap-2 text-center rounded-xl  mt-4  overflow-auto'>
            {/* contenedor 1 */}
            {vehiculosall.data.map(vehiculo=>
               <Tarjetasvehiculos 
               key={vehiculo['id']}
               vehiculo={vehiculo}
               
               />
            )}
           
           
            </div>


       
    </div>
  )
}
