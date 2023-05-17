import React from 'react'
import useBpsystem from '../hooks/useBpsystem'

export default function ModalUsuario() {
    const {componente,handleClickModalUsuario} = useBpsystem()
 
            return(
                <>
                    <div className='w-96 h-full  flex flex-col p-o'>
                    <div className="flex justify-end">
                        <button type="button"
                                onClick={() => handleClickModalUsuario()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                       <div>
                        {/* formulario con los datos */}
                        <form className='flex flex-col'>
                            <label htmlFor="">Nombre</label>
                            <input type="text" 
                            className='block w-full rounded-md border-0 py-1.5
                            text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                            focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                            <label htmlFor="">Apellido</label>
                            <input type="text" 
                            className='block w-full rounded-md border-0 py-1.5
                            text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                            focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                            <label htmlFor="">Cedula</label>
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
                            focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                            <label htmlFor="">Telefono</label>
                            <input type="text"
                            className='block w-full rounded-md border-0 py-1.5
                            text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                            focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            <label htmlFor="">Fecha de inicio</label>
                            <label htmlFor="">
                                28/01/2022
                            </label>
                            <label htmlFor="">Clientes</label>
                            <label htmlFor="">
                            20
                            </label>
                            <label htmlFor="">Cerrados</label>
                            <label htmlFor="">
                            7
                            </label>

                            <input type="submit" value="Guardar cambios" className='w-full  bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer '/>


                        </form>

                       </div>
                    </div>
                
                
                </>
            )
         
    
}
