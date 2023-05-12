import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        {/* div principal */}
        <div className='w-full h-full sm:bg-white sm:w-1/3 sm:h-auto flex flex-col items-center justify-center shadow rounded-lg '>
                <h1 className='text-center font-bold my-3'>Inicio session</h1>
                <form className='flex flex-col p-5'>
                    <label htmlFor="">Correo</label>
                    <input type="text" className='block w-full rounded-md border-0 py-1.5
                             text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                             focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                    <label htmlFor="">Password</label>
                    <input type="text" className='block w-full rounded-md border-0 py-1.5
                             text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                             focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                    <div className='text-sky-800 text-sm'>
                        <Link>Olvido su password?</Link>
                    </div>
                    <input type="button" value="Registrar" 
                            className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer' />
                </form>
                <div className='text-sky-800 mx-2 mb-4'>
                    <Link to={'/registro'}>No tiene cuenta? Registrese en CarMot</Link>
                </div>
            
        </div>
    </>
  )
}
