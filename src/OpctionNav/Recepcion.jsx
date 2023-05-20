import React from 'react'
import useBpsystem from '../hooks/useBpsystem'

export default function Recepcion() {
  const {modonoche,handleClickModalVehiculos} = useBpsystem()
  return (
    <>
      <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
       md:h-full h-auto w-full flex md:flex-row flex-col`} >
        <div className='md:grid md:grid-rows md:gap-2 md:mx-2 md:my-1  h-auto md:w-3/5 rounded-xl shadow p-3 flex flex-col w-full'>
            <div className=' w-full h-full m-0 rounded-xl  flex md:flex-row gap-2 flex-col'>
                <div className='md:m-1 md:w-1/2 md:h-11/12 rounded-xl  border-solid border-2 border-slate-200 w-full'>
                    <h2 
                      className='text-center font-bold  text-xl'
                    >
                      Documentos
                      </h2>
                      <div className='m-2 flex flex-col  relative bg-sky-500 rounded-lg p-1 hover:bg-sky-800 cursor-pointer'>
                          <label htmlFor="" className='text-white  absolute '>Cedula</label>
                          <input type="file" className='text-white rounded-sm  w-full h-full opacity-0 cursor-pointer' />
                      </div>
                      <div className='m-2 flex flex-col  relative bg-sky-500 rounded-lg p-1 hover:bg-sky-800 cursor-pointer'>
                          <label htmlFor="" className='text-white  absolute '>Estratos bancarios</label>
                          <input type="file" className='text-white rounded-sm  w-full h-full opacity-0 cursor-pointer' />
                      </div>
                      <div className='m-2 flex flex-col  relative bg-sky-500 rounded-lg p-1 hover:bg-sky-800 cursor-pointer'>
                          <label htmlFor="" className='text-white  absolute '>Declaracion de renta</label>
                          <input type="file" className='text-white rounded-sm  w-full h-full opacity-0 cursor-pointer' />
                      </div>
                      <div className='m-2 flex flex-col  relative bg-sky-500 rounded-lg p-1 hover:bg-sky-800 cursor-pointer'>
                          <label htmlFor="" className='text-white  absolute '>Solicitud de credito</label>
                          <input type="file" className='text-white rounded-sm  w-full h-full opacity-0 cursor-pointer' />
                      </div>
                </div>
                <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} 
                m-1 md:w-1/2 w-full h-11/12 rounded-xl  px-1 overflow-auto border-solid border-2 border-slate-200`}>
                    <h3 
                      className='text-center font-bold   text-lg'
                    >
                      Calcule El credito
                      </h3>
                    <label htmlFor="">Valor a financiar</label>
                    <input type="number" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
                    <label htmlFor="">Tasa de interes</label>
                    <input type="number" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
                    <label htmlFor="">Numero de cuotas</label>
                    <input type="number" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
                    <h4>Cuota mensual: $000</h4>
                </div>
            </div>
            <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} 
            w-full h-full m-1 rounded-xl shadow flex md:flex-row flex-col gap-1`}>
                <div className='h-auto md:w-1/2 w-full  m-1 rounded-xl bg-no-repeat bg-auto p-2'>
                  <img 
                      src="../public/img/imagencarro.png"
                      alt="" 
                      className='rounded-xl'
                      />
                </div>
                <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} 
                h-auto md:w-1/6 w-full  m-1 rounded-xl flex md:flex-col flex-row items-center pt-1 gap-1 border-solid border-2 border-slate-200`}>
                  <div className='h-auto w-1/2 bg-red-400  rounded-xl bg-no-repeat bg-auto'>
                    <img 
                        src="../public/img/imagencarro.png"
                        alt="" 
                        className='rounded-xl'
                        />
                  </div>
                  <div className='h-auto w-1/2 bg-red-400  rounded-xl bg-no-repeat bg-auto'>
                    <img 
                        src="../public/img/imagencarro.png"
                        alt="" 
                        className='rounded-xl'
                        />
                  </div>
                  <div className='h-auto w-1/2 bg-red-400  rounded-xl bg-no-repeat bg-auto'>
                    <img 
                        src="../public/img/imagencarro.png"
                        alt="" 
                        className='rounded-xl'
                        />
                  </div>
                  <div className='h-auto w-1/2 bg-red-400  rounded-xl bg-no-repeat bg-auto'>
                    <img 
                        src="../public/img/imagencarro.png"
                        alt="" 
                        className='rounded-xl'
                        />
                  </div>
                </div>
                <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} 
                h-auto md:w-1/3 w-full  m-1 rounded-xl flex flex-col gap-2 p-2 font-bold border-solid border-2 border-slate-200`}>
                  <button 
                  onClick={()=> handleClickModalVehiculos()}
                  className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer'>
                    Seleccionar vehiculo
                    </button>
                    <p>PLACA:####</p>
                    <p>kILOMETRAJE:####</p>
                    <p>MACA:####</p>
                    <p>MODELO:####</p>
                </div>

            </div>
        </div>
        <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} 
        md:w-2/5 w-full md:h-auto h-full m-2 rounded-xl shadow `}>
          <h1 
              className='text-center font-bold  text-xl'
              >Cliente</h1>
          <form className='flex flex-col p-3'>
            <label className='text-lg '>Nombre</label>
            <input type="text" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
            <label className='text-lg '>Apellido</label>
            <input type="text" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
            <label className='text-lg '>Cedula</label>
            <input type="number" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
            <label className='text-lg '>Fecha nacimiento</label>
            <input type="date" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
            <label className='text-lg '>Telefono</label>
            <input type="number" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
            <label className='text-lg '>Correo</label>
            <input type="email" className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                     sm:text-sm sm:leading-6`}/>
            <input type="button" value="Registrar" 
                        className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer' />
          </form>
        </div>
      </div>
    
    </>
  )
}
