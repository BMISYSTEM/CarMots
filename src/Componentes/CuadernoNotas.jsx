import React from 'react'

export default function CuadernoNotas() {
  return (
    <>
    <div className=' flex flex-col gap-4 p-3'>
        <div className='flex flex-row gap-3'>
            <button className=' w-1/5 p-3 rounded-xl bg-sky-500 text-white font-bold'>
                Actual
            </button>
            <button className=' w-1/5 p-3 rounded-xl bg-sky-500 text-white font-bold'>
                Ver notas
            </button>
        </div>
        <label htmlFor="">Fecha</label>
        <input type="date" className='rounded-xl text-center w-full border-b-2 '/>
        <label htmlFor="">Hora</label>
        <input type="time" className='rounded-xl text-center w-full border-b-2 '/>
        <label htmlFor="">Descripcion</label>
        <input type="text" className='rounded-xl text-center w-full border-b-2 '/>
        <label htmlFor="">Valor o costo</label>
        <input type="number" className='rounded-xl text-center w-full border-b-2'/>
        <button className='p-3 rounded-sm bg-green-500 text-white font-bold'>Agregar Nota</button>
    </div>
    </>
  )
}
