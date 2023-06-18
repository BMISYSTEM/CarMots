import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { useUsuarios } from '../hooks/useUsuarios'

export default function ModalUsuario() {
    const {componente,handleClickModalUsuario,usuarioseleccionado} = useBpsystem()
    const {usuarios,usuariosloading} = useUsuarios()
    const usuario = usuarios?.data?.filter(usuarios => usuarios.id = usuarioseleccionado)
    console.log(usuario)
    if (usuariosloading) {
        return (
            <>
                    <div className='w-full  h-screen grid place-items-center '>
                    <img src="../../img/recatspiner.gif" alt="cargando..." />
                    <p>cargando...</p>
                    </div>
                </>
            );
    }
 
            return(
                <>
                    <div className='w-96 h-full  flex flex-col p-o'>
                    <div className="flex justify-end">
                        <button type="button"
                                onClick={() => handleClickModalUsuario(usuarioseleccionado)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                       <div>
                        {/* formulario con los datos */}
                       
                            <p className='text-xl font-bold text-slate-600 m-2 block text-center'>
                                        <span 
                                            className='text-xl text-slate-800 font-bold block text-center'>
                                                Nombre
                                        </span>
                                        {usuario[0]?.name}
                            </p>
                            <p className='text-xl font-bold text-slate-600 m-2 block text-center'>
                                        <span 
                                            className='text-xl text-slate-800 font-bold block text-center'>
                                                Apellidos
                                        </span>
                                        {usuario[0]?.apellido}
                            </p>
                            <p className='text-xl font-bold text-slate-600 m-2 block text-center'>
                                        <span 
                                            className='text-xl text-slate-800 font-bold block text-center'>
                                                Cedula
                                        </span>
                                        {usuario[0]?.cedula}
                            </p>
                            
                            <p className='text-xl font-bold text-slate-600 m-2 block text-center'>
                                        <span 
                                            className='text-xl text-slate-800 font-bold block text-center'>
                                                Correo
                                        </span>
                                        {usuario[0]?.email}
                            </p>
                            <p className='text-xl font-bold text-slate-600 m-2 block text-center'>
                                        <span 
                                            className='text-xl text-slate-800 font-bold block text-center'>
                                                Fecha inicio
                                        </span>
                                        {usuario[0]?.fecha_inicio}
                            </p>
                            <p className='text-xl font-bold text-slate-600 m-2 block text-center'>
                                        <span 
                                            className='text-xl text-slate-800 font-bold block text-center'>
                                                Clientes Totales
                                        </span>
                                        {usuario[0]?.clientes}
                            </p>
                            <p className='text-xl font-bold text-slate-600 m-2 block text-center'>
                                        <span 
                                            className='text-xl text-slate-800 font-bold block text-center'>
                                                Negocios cerrados
                                        </span>
                                        {usuario[0]?.cerrados}
                            </p>
                   

                       </div>
                    </div>
                
                
                </>
            )
         
    
}
