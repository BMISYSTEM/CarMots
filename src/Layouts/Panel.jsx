import { useState,memo} from 'react'
import Modal from 'react-modal'
import Aside from '../Componentes/Aside'
import { Outlet } from 'react-router-dom'
import useBpsystem from '../hooks/useBpsystem'
import {useNotificaciones} from '../hooks/useNotificaciones'
import ModalCliente from '../Componentes/ModalCliente'
import ModalUsuario from '../Componentes/ModalUsuario'
import { useAuth } from '../hooks/useAuth'
import { ToastContainer } from 'react-toastify'
import ModalVehiculos from '../Componentes/ModalVehiculos'
import CuadernoNotas from '../Componentes/CuadernoNotas'
import LoadingPanel from '../Componentes/LoadingPanel'
import ModalUsuariosPermisos from '../Componentes/ModalUsuariosPermisos'
import ModalClientesCentrofinanciero from '../Componentes/ModalClientesCentrofinanciero'
import ModalEdiccionClientesFinanciera from '../Componentes/ModalEdiccionClientesFinanciera'
import SeguimientoModal from '../OpctionNav/Submenus/seguimiento/modales/SeguimientoModal'
import Loading from '../Componentes/Loading'



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};
const customStyles2 = {
  content: {
    top: '20%',
    left: '100%',
    right: '100%',
    bottom: '20%',
    marginRight: '-150%',
    with:'100%',
    heigt:'100%',
    transform: 'translate(-50%, -50%)',
    
  },
};
Modal.setAppElement('#root')
export default function Panel() {
  const nombreImage = localStorage.getItem('img')
  const url = import.meta.env.VITE_API_URL

  //estado del menu segun usuario 
  


  const {user,error,datapermisos,permisosuser} = useAuth({middleware:'auth'})
  const [inicial,setInicial] =useState(0)
  const [permiso,setpermiso] =useState([])
  const [notificaciones,setnotificaciones] =useState(false)
  const [notas,setnotas] =useState(false)
  const {clienteModal,usuariosModal,modonoche,setModonoche,vehiculosModal,
    UsuariosPermisosModal,ClientesCentrofinanciero,editarclientesfinanciera,
    seguimientoModal} = useBpsystem()
  const {allnotificaciones,loadingnotificaciones} = useNotificaciones()

  if(loadingnotificaciones){
    return (
      <Loading/>
    )
  }
  // console.log(allnotificaciones.data)
  return (
    <>
      <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} flex md:flex-row flex-col h-screen w-auto overflow-hidden`}>
        <Aside />
        <main className={`h-screen w-full md:mx-5 ${modonoche ? "bg-black": "bg-white"} md:my-0 my-14 overflow-auto`}>
          <header className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} w-full h-16 flex flex-col shadow rounded-lg border-b-2  mt-2`}>
            <div className='flex flex-row justify-between items-center'>
                <div className='w-1/2 rounded-xl h-full  items-center flex flex-row gap-2 justify-center '>
                      {/* <div className='hover:text-indigo-500 justify-center text-center p-2 hover:cursor-pointer'
                            >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                      </div> */}
                  <div className="relative">
                        <button 
                        type="button" 
                        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" 
                        aria-expanded="false"
                        onClick={()=>setnotificaciones(!notificaciones)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                          </svg>
                          <p className='rounded-full bg-red-500 w-6 h-6 text-sm p-0 justify-center'>

                          </p>
                        </button>
                        {/* menu oculto */}
                        {notificaciones? 
                          <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                              {/* notificaciones */}
                              {allnotificaciones.data.map(mensajes=>
                                  <div className='flex flex-row m-2 border-2 rounded-lg p-3 gap-2 bg-slate-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                    </svg>
                                   <p>{mensajes['mensaje']}</p>
                                  </div>
                                
                                
                                
                                )}
                            </div>
                          </div>
                        : ""}
                      </div>
                      {/* Notas */}
                      <div className="relative">
                        <button 
                        type="button" 
                        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" 
                        aria-expanded="false"
                        onClick={()=>setnotas(!notas)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                           </svg>
                        </button>
                        {/* menu oculto */}
                        {notas? 
                          <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                              {/* cuaderno */}
                              <CuadernoNotas />
                            </div>
                          </div>
                        : ""}
                      </div>
                      <div className='hover:text-indigo-500 justify-center text-center p-2  hover:cursor-pointer'
                          onClick={()=> setModonoche(!modonoche)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>


                      </div>
                     
                </div>
                <div className='rounded-full border-2  w-12 h-12 '>
                    <img src={url+"/storage/"+ nombreImage} className='rounded-full  w-12 h-12 ' alt="pefil" />
                </div>
            </div>
          </header>
          <div className={`${modonoche ? "bg-black text-white ": "bg-white border-slate-200"} w-full md:h-5/6 h-full mt-5 shadow-sm  rounded-lg  `}>
            <Outlet />
          </div>
        </main>

      </div>
      <Modal isOpen={clienteModal} style={customStyles}>
          <ModalCliente />
      </Modal>
      <Modal isOpen={usuariosModal} style={customStyles}>
          <ModalUsuario />
      </Modal>
      <ToastContainer />
      <Modal isOpen={vehiculosModal} className={'w-full h-full grid place-items-center bg-black/30'}>
          <ModalVehiculos  />
      </Modal>
      <Modal isOpen={UsuariosPermisosModal} className={'w-full h-full grid place-items-center bg-black/30'}>
          <ModalUsuariosPermisos  />
      </Modal>
      <Modal isOpen={ClientesCentrofinanciero} className={'w-full h-full grid place-items-center bg-black/30'}>
          <ModalClientesCentrofinanciero  />
      </Modal>
      <Modal isOpen={editarclientesfinanciera} className={'w-full h-full grid place-items-center bg-black/30'}>
          <ModalEdiccionClientesFinanciera  />
      </Modal>
      <Modal isOpen={seguimientoModal} className={'w-full h-full grid place-items-center   bg-black/30'}>
          <SeguimientoModal  />
      </Modal>
      <ToastContainer />
     
    </>
  )
}
