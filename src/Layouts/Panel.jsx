import React from 'react'
import Modal from 'react-modal'
import Aside from '../Componentes/Aside'
import { Outlet } from 'react-router-dom'
import useBpsystem from '../hooks/useBpsystem'
import ModalCliente from '../Componentes/ModalCliente'
import ModalUsuario from '../Componentes/ModalUsuario'


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
Modal.setAppElement('#root')
export default function Panel() {
  const {clienteModal,usuariosModal} = useBpsystem()
  
  return (
    <>
      <div className='flex md:flex-row flex-col h-screen w-auto overflow-hidden'>
        <Aside />
        <main className='h-screen w-full md:mx-5 bg-white md:my-0 my-14 overflow-auto'>
          <header className='bg-white w-full h-16 flex flex-col shadow rounded-lg border-b-2 border-slate-200 mt-2'>

          </header>
          <div className=' w-full md:h-5/6 h-full mt-5 shadow-sm  rounded-lg border-2 border-slate-200 '>
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
     
    </>
  )
}
