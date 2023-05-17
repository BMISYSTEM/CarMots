import React from 'react'
import useBpsystem from '../hooks/useBpsystem'

export default function Administrador() {
  const {handleClickModalCliente,handleClickModalUsuario,modonoche} = useBpsystem()
  return (
    <>
      <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} h-full w-auto flex flex-col gap-1 p-2 `}>
          <div className= {`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
           w-full h-full p-3 border-2  rounded-xl overflow-auto`}>
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
                  <p  className='flex text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> handleClickModalCliente()} fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </p>
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
                  <p  className='flex text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> handleClickModalCliente()} fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </p>
                  </td>

                </tr>
              </tbody>
            </table>

          </div>
          <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} w-full h-full`}>
          <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
           w-full h-full p-3 border-2 border-slate-200 rounded-xl overflow-auto`}>
            <h1 className='text-center font-bold text-xl'>Usuarios</h1>
            <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 '>
                  <td >Nombre</td>
                  <td>Telefono</td>
                  <td>Correo</td>
                  <td>Cedula</td>
                  <td>Fecha inicio</td>
                  <td>Clientes</td>
                  <td>Cerrados</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                <tr className=' text-left w-full  border-b-2 border-slate-200 hover:bg-sky-300 hover:cursor-pointer text-sm'>
                  <td>Bairon</td>
                  <td>3184482848</td>
                  <td>baironmenesesidarrag.990128@gmail.com</td>
                  <td>1143994831</td>
                  <td>20/01/2022</td>
                  <td>20</td>
                  <td>7</td>
                  <td>
                  <p  className='flex text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> handleClickModalUsuario()} fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </p>
                    </td>
                </tr>
                <tr className=' text-left w-full  border-b-2 border-slate-200 hover:bg-sky-300 hover:cursor-pointer text-sm'>
                <td>Bairon</td>
                  <td>3184482848</td>
                  <td>baironmenesesidarrag.990128@gmail.com</td>
                  <td>1143994831</td>
                  <td>20/01/2022</td>
                  <td>20</td>
                  <td>7</td>
                  <td>
                  <p  className='flex flex-row text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> handleClickModalUsuario()} fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </p>
                    </td>
                </tr>
              </tbody>
            </table>

          </div>

          </div>
      </div>
    
    </>
  )
}
