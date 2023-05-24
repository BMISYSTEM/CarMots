import React from 'react'
import useBpsystem from '../hooks/useBpsystem'

export default function Administrador() {
  const {handleClickModalCliente,handleClickModalUsuario,modonoche,clientesall,clientesloading,usuarios} = useBpsystem()
  if(clientesloading)
  {
    return (
      <>
              <div className='w-full  h-screen grid place-items-center '>
              <img src="../../img/recatspiner.gif" alt="cargando..." />
              <p>cargando...</p>
              </div>
          </>
      );
  }
  return (
    <>
      <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} h-full w-auto flex flex-col gap-1 p-2 `}>
          <div className= {`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
           w-full h-full p-3 border-2  rounded-xl overflow-auto`}>
            <h1 className='text-center font-bold text-xl'>Clientes</h1>
            <table className='p-3 w-full '>
              <thead>
                <tr className=' text-left w-full  border-b-2 border-slate-200  hover:cursor-pointer text-xl'>
                  <td className='text-center'>Nombre</td>
                  <td className='text-center'>Telefono</td>
                  <td className='text-center'>Correo</td>
                  <td className='text-center'>vehiculo</td>
                  <td className='text-center'>compra</td>
                  <td className='text-center'>estado</td>
                  <td className='text-center'>Asesor</td>
                  <td className='text-center'>Acciones</td>
                </tr>
              </thead>
              <tbody>
                {clientesall?.data?.data?.map(cliente =>
                  <tr key={cliente.id} className=' text-left w-full  border-b-2 border-slate-200  hover:cursor-pointer text-sm'>
                    <td className='text-center'>{cliente['nombre']}</td>
                    <td className='text-center'>{cliente['telefono']}</td>
                    <td className='text-center'>{cliente['email']}</td>
                    <td className='text-center'>{cliente.vehiculo['placa']}</td>
                    <td className='text-center'>{cliente.estado['estado']}</td>
                    <td className='text-center'>{cliente.estado['estado']}</td>
                    <td className='text-center'>{cliente.user['name']}</td>
                    <td className='text-center items-center'>
                      <button 
                        onClick={()=>handleClickModalCliente(cliente.id) }
                        className='w-1/2 text-center  p-2 rounded-xl bg-sky-700 text-lg text-white font-bold hover:bg-sky-950'>
                          Ver
                      </button>
                    </td>
                    
                  </tr>
                )}
               
              </tbody>
            </table>

          </div>
          <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} w-full h-full`}>
          <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
           w-full h-full p-3 border-2 border-slate-200 rounded-xl overflow-auto`}>
            <h1 className='text-center font-bold text-xl'>Usuarios</h1>
            <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 text-center text-xl'>
                  <td >Nombre</td>
                  <td>Correo</td>
                  <td>Cedula</td>
                  <td>Fecha inicio</td>
                  <td>Clientes</td>
                  <td>Cerrados</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                {usuarios?.data?.map(usuarios => 
                  <tr key={usuarios['id']} className=' text-left w-full  border-b-2 border-slate-200  hover:cursor-pointer text-sm'>
                    <td className='text-center items-center'>{usuarios['name']}</td>
                    <td className='text-center items-center'>{usuarios['email']}</td>
                    <td className='text-center items-center'>{usuarios['cedula']}</td>
                    <td className='text-center items-center'>{usuarios['fecha_inicio']}</td>
                    <td className='text-center items-center'>{usuarios['clientes']}</td>
                    <td className='text-center items-center'>{usuarios['cerrados']}</td>
                    <td className='text-center items-center'>
                      <button 
                        onClick={()=> handleClickModalUsuario(usuarios['id']) }
                        className='w-1/2 text-center  p-2 rounded-xl bg-sky-700 text-lg text-white font-bold hover:bg-sky-950'>
                          Ver
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>

          </div>
      </div>
    
    </>
  )
}
