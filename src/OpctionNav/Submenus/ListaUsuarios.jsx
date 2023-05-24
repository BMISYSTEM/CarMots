import { useState } from 'react'
import { Link } from 'react-router-dom'
import useBpsystem from '../../hooks/useBpsystem'

export default function ListaUsuarios() {
    const {usuariospermisos} = useBpsystem()
    const [activos,setactivos] = useState(true)
    // console.log(usuariospermisos?.data)
  return (
    <>
        <div className='w-auto h-full  flex flex-col p-3 overflow-hidden'>
            {/* filtros */}
            <div className='w-full rounded-xl border-2 h-1/6  p-3 items-center flex flex-row gap-4 '>
                <div className='relative flex item-center text-gray-400 focus-within:text-gray-800 border-b-2 border-slate-200'>
                    {/* imagen */}
                    <div className='absolute w-5 h-5 ml-3 pointer-events-none p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input 
                        type="text"
                        name='shear'
                        placeholder='Nombre,cedula'
                        className='w-full pr-3 pl-16 rounded-xl h-full p-3 focus:border-sky-400 bg-transparent'
                     />
                </div>
                    <div className='flex flex-row items-center gap-2'>
                        <label htmlFor="">Activos</label>
                        <div className='w-12 h-12 cursor-pointer hover:text-green-500 flex flex-row items-center' onClick={()=> setactivos(!activos)}>
                            {activos ? 
                                <svg width="800px" height="800px" className='w-8 h-8' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                                </svg>
                            : 
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                                    <title/>
                                    <desc/>
                                    <defs/>
                                    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                                    <g fillRule="nonzero" id="switch">
                                    <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                                    <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                                    </g>
                                    </g>
                                </svg>
                            }
                        </div>
                    </div>
                <div >
                    <Link to={'/panel/usuarios/list'}>
                     <button className='p-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-800'>Nuevo</button>
                    </Link>
                </div>
            </div>
            {/* listado */}
            <div className='overflow-auto'>
            <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 text-center text-xl'>
                  <td >Nombre</td>
                  <td>Correo</td>
                  <td>Cedula</td>
                  <td>Fecha inicio</td>
                  <td>Estado</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody >
               
                {usuariospermisos?.data.map(usuarios=>
                    
                    <tr key={usuarios['id']} className=' text-left w-full  border-b-2 border-slate-200  hover:cursor-pointer text-sm'>
                    <td className='text-center items-center'>{usuarios['name']}</td>
                    <td className='text-center items-center'>{usuarios['email']}</td>
                    <td className='text-center items-center'>{usuarios['cedula']}</td>
                    <td className='text-center items-center'>{usuarios['created_at']}</td>
                    <td className='text-center items-center'>{usuarios['rol']}</td>
                    <td className='text-center items-center flex flex-row gap-1'>
                      <button 
                        
                        className='w-1/2 text-center text-sm p-2 rounded-sm bg-sky-700  text-white font-bold hover:bg-sky-950'>
                          Permisos
                      </button>
                      <button 
                        
                        className='w-1/2 text-center  p-2 rounded-sm bg-red-700 text-sm text-white font-bold hover:bg-red-950'>
                          Bloquear
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
