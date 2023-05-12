import React from 'react'
import useBpsystem from '../hooks/useBpsystem'

export default function Administrador() {
  const {handleClickModalCliente,handleClickModalUsuario} = useBpsystem()
  return (
    <>
      <div className='bg-white h-full w-auto flex flex-col gap-1 p-2 '>
          <div className='bg-white w-full h-full p-3 border-2 border-slate-200 rounded-xl overflow-auto'>
            <h1 className='text-center font-bold text-xl'>Clientes</h1>
            <table className='p-3 w-full '>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 '>
                  <td className='text-left'>Nombre</td>
                  <td>Telefono</td>
                  <td>Correo</td>
                  <td>vehiculo</td>
                  <td>compra</td>
                  <td>estado</td>
                  <td>Asesor</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>

                <tr className=' text-left w-full  border-b-2 border-slate-200 hover:bg-sky-300 hover:cursor-pointer text-sm'>
                  <td>Bairon</td>
                  <td>3184482848</td>
                  <td>baironmenesesidarrag.990128@gmail.com</td>
                  <td>Chevrolet</td>
                  <td>Retoma</td>
                  <td>pre Aprobado</td>
                  <td>Brandon</td>
                  <td>
                  <p onClick={()=> handleClickModalCliente()}>Editar</p>
                  </td>
                </tr>
                <tr className=' text-left w-full  border-b-2 border-slate-200 hover:bg-sky-300 hover:cursor-pointer text-sm'>
                  <td>Bairon</td>
                  <td>3184482848</td>
                  <td>baironmenesesidarrag.990128@gmail.com</td>
                  <td>Chevrolet</td>
                  <td>Retoma</td>
                  <td>pre Aprobado</td>
                  <td>Brandon</td>
                  <td>
                  <p onClick={()=> handleClickModalCliente()}>Editar</p>
                  </td>

                </tr>
              </tbody>
            </table>

          </div>
          <div className='bg-white w-full h-full'>
          <div className='bg-white w-full h-full p-3 border-2 border-slate-200 rounded-xl overflow-auto'>
            <h1 className='text-center font-bold text-xl'>Usuarios</h1>
            <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 '>
                  <td className='text-left'>Nombre</td>
                  <td>Telefono</td>
                  <td>Correo</td>
                  <td>vehiculo</td>
                  <td>compra</td>
                  <td>estado</td>
                  <td>Asesor</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                <tr className=' text-left w-full  border-b-2 border-slate-200 hover:bg-sky-300 hover:cursor-pointer text-sm'>
                  <td>Bairon</td>
                  <td>3184482848</td>
                  <td>baironmenesesidarrag.990128@gmail.com</td>
                  <td>Chevrolet</td>
                  <td>Retoma</td>
                  <td>pre Aprobado</td>
                  <td>Brandon</td>
                  <td><p onClick={()=> handleClickModalUsuario()}>Editar</p></td>
                </tr>
                <tr className=' text-left w-full  border-b-2 border-slate-200 hover:bg-sky-300 hover:cursor-pointer text-sm'>
                  <td>Bairon</td>
                  <td>3184482848</td>
                  <td>baironmenesesidarrag.990128@gmail.com</td>
                  <td>Chevrolet</td>
                  <td>Retoma</td>
                  <td>pre Aprobado</td>
                  <td>Brandon</td>
                  <td><p onClick={()=> handleClickModalUsuario()}>Editar</p></td>
                </tr>
              </tbody>
            </table>

          </div>

          </div>
      </div>
    
    </>
  )
}
