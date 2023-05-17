import React from 'react'
import useBpsystem from '../hooks/useBpsystem'

export default function ModalCoptionente() {
    const {componente,handleClickModalCliente,modonoche} = useBpsystem()
 
            return(
                <>
                    <div className='lg:w-auto w-screen h-screen lg:h-full bg-opacity-20 backdrop-blur-lg flex flex-col overflow-auto mb-32 lg:mb-0 lg:p-0 pb-24 pt-40 z-50 px-3'>
                        <div className="flex justify-end items-end">
                            <button type="button"
                                    onClick={() => handleClickModalCliente()} className='hover:text-red-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeoptionnecap="round" strokeoptionnejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div >
                        <div className='flex lg:flex-row flex-col gap-5 h-auto mt-12 '>
                            <div>
                                <h1 className='text-xl font-bold text-slate-800 m-2 text-center'>Cliente</h1>
                                <form >
                                    <label htmlFor="">Nombre</label>
                                    <input type="text"
                                            className='block w-full rounded-md border-0 py-1.5
                                            text-gray-900 shadow-sm ring-1 ring-inset
                                            ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                    <label htmlFor="">Apellidos</label>
                                    <input type="text" 
                                            className='block w-full rounded-md border-0 py-1.5
                                            text-gray-900 shadow-sm ring-1 ring-inset
                                            ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                                    <label htmlFor="">Teleforno</label>
                                    <input type="text" 
                                            className='block w-full rounded-md border-0 py-1.5
                                            text-gray-900 shadow-sm ring-1 ring-inset
                                            ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                                    <label htmlFor="">Correo</label>
                                    <input type="text"
                                            className='block w-full rounded-md border-0 py-1.5
                                            text-gray-900 shadow-sm ring-1 ring-inset
                                            ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                    <label htmlFor="">Estado</label>
                                    <input type="text"
                                            className='block w-full rounded-md border-0 py-1.5
                                            text-gray-900 shadow-sm ring-1 ring-inset
                                            ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                </form>
                            </div>
                            <div>
                                <p className='text-xl font-bold text-slate-800 m-2 text-center'>Vehiculo</p>
                                <p className='text-xl font-bold text-slate-600 m-2'>Marca:#####</p>
                                <p className='text-xl font-bold text-slate-600 m-2'>Modelo:#####</p>
                                <p className='text-xl font-bold text-slate-600 m-2'>Kilometraje:#####</p>
                                <p className='text-xl font-bold text-slate-600 m-2'>Valor:$#####</p>
                                <p className='text-xl font-bold text-slate-600 m-2'>Medio compra:##</p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold text-slate-800 m-2 text-center'>Proceso</h1>
                                <form >
                                    <label htmlFor="" >Estado actual</label>
                                    <select name="" id="" className='ml-1 border-2 border-slate-200'>
                                        <option>Pendiente</option>
                                        <option>Radicado</option>
                                        <option>Documentacion</option>
                                        <option>Finaoptionzado</option>
                                    </select>
                                    <div className='text-center flex flex-col'>
                                        <h2 className=' text-xl font-bold text-slate-800 mt-4 text-center'>Agendar cita</h2>
                                        <input type="date" className='mt-3 border-2 border-slate-200' />
                                        <label htmlFor="" className='text-xl font-bold text-slate-600 m-2 text-left'>Comentario</label>
                                        <textarea name="" id="" cols="30" rows="5" className='border-2 border-slate-200 rounded-xl'></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                            <div className='w-full flex justify-center '>
                                <button className='w-1/2  bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer'>Guardar Cambios</button>
                            </div>
                    </div>
                
                
            </>
            )
         
    
        
 
}
