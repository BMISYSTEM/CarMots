import React from 'react'

export default function Usuarios() {
  return (
    <>
      <div className=' flex w-auto h-full bg-white'>
        <div className='w-full h-11/12 shadow m-1 bg-white p-5 text-center flex flex-col justify-center items-center'>
            <h1>Crear nuevo Usuario</h1>
            <div className='w-full flex flex-row gap-3'>
              <div className='w-full'>
                <div className='w-full h-1/3 border-2 border-slate-200 m-2 flex flex-row items-center gap-4 rounded-xl'>
                  <div className='grid place-items-center w-1/2'>
                    <div className='w-20 h-20 border-2 border-slate-200 m-2 rounded-full relative'>
                      <p className='w-full h-full  absolute z-10 grid place-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                          viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                          className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                      </p>
                    
                      <input type="file" className='opacity-0 z-10 relative w-full h-full rounded-full' />
                    </div>
                    <p>Foto de perfil</p>
                  </div>
                  <div className='bg-white w-full h-full flex flex-row items-center justify-center'>
                      <button type='button' className='m-2 p-2 bg-sky-300 h-1/2 rounded-xl text-white font-bold text-lg shadow hover:bg-sky-900'
                      >Permisos </button>
                      <button className='m-2 p-2 bg-sky-300 h-1/2 rounded-xl text-white font-bold text-lg shadow  hover:bg-sky-900'
                      >Guardar</button>
                  </div>
                </div>
                <div className='w-full h-3/5 bg-white m-2  rounded-xl border-2 border-slate-200 flex flex-row p-5'>
                  <div className='flex flex-col w-full items-start'>
                    <label htmlFor="">Dashboard</label>
                    <input type="radio" value="dashboard" />
                    <label htmlFor="">Administrador</label>
                    <input type="radio" value="dashboard" />
                    <label htmlFor="">Usuarios</label>
                    <input type="radio" value="dashboard" />
                    <label htmlFor="">Recepcion</label>
                    <input type="radio" value="dashboard" />
                    <label htmlFor="">Ajustes</label>
                    <input type="radio" value="dashboard" />
                  </div>
                  <div className='flex flex-col w-full items-start'>
                    <label htmlFor="">Campañas</label>
                    <input type="radio" value="dashboard" />
                    <label htmlFor="">Contabilidad</label>
                    <input type="radio" value="dashboard" />
                    <label htmlFor="">Trensferencia</label>
                    <input type="radio" value="dashboard" />
                    <label htmlFor="">Proveedor</label>
                    <input type="radio" value="dashboard" />
                  </div>




                </div>
              </div>
              <form className='p-2 bg-white h-full w-full overflow-auto flex flex-col text-left rounded-xl border-2 border-slate-200'>
                <label htmlFor="" >Nombre</label>
                <input type="text" name="nombre" id="nombre"    className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <label htmlFor="">Apellidos</label>
                <input type="text" name="apellido" id="apellido"    className="block w-4/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <label htmlFor="">Fecha nacimiento</label>
                <input type="text" name="fechan" id="fechan"    className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <label htmlFor="">Cedula</label>
                <input type="text" name="cedula" id="cedula"    className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <label htmlFor="">Correo electronico</label>
                <input type="text" name="email" id="email"    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="password" autoComplete='cc-csc'  className="block w-2/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <label htmlFor="">Confirmar Password</label>
                <input type="password" name="confirmate_password" id="confirmate_password"  autoComplete='cc-csc'  className="block w-2/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
              </form>
            </div>
            
        </div >
        
      </div>
    </>
  )
}
