import React from 'react'
import BarraVertical from '../Graficas/BarraVertical'
import Dona from '../Graficas/Dona'
import Area from '../Graficas/Area'
import HorizontalBarr from '../Graficas/HorizontalBarr'

export default function Dashboard() {

  return (
    <>
    <div className='w-auto h-auto bg-white flex lg:flex-row flex-col gap-2'>
        {/* recuadros de informacion peque */}
        <div className='flex lg:flex-row flex-col w-full p-2'>
          {/* usuarios */}
          <div className='bg-sky-400 text-white w-full h-20 m-2 rounded-xl flex items-center text-center  flex-col'>
              <h1 className='font-bold text-5xl '>10</h1>
              <h2 className='text-md'>Usuarios</h2>
          </div>
          {/* Clientes */}
          <div className='bg-indigo-400 w-full text-white h-20 m-2 rounded-xl flex items-center text-center flex-col'>
              <h1 className='font-bold text-5xl '>35</h1>
              <h2 className='text-md'>Clientes</h2>
          </div>
          {/* Aprobados */}
          <div className='bg-green-500 text-white w-full h-20 m-2 rounded-xl flex items-center text-center flex-col'>
              <h1 className='font-bold text-5xl '>15</h1>
              <h2 className='text-md'>Aprobados</h2>
          </div>
          {/* Pendientes */}
          <div className=' text-white bg-amber-500 w-full h-20 m-2 rounded-xl flex items-center text-center flex-col'>
              <h1 className='font-bold text-5xl '>20</h1>
              <h2 className='text-md'>Pendientes</h2>
          </div>
          {/* meta diaria  */}
          <div className='bg-green-300 text-white w-full h-20 m-2 rounded-xl flex items-center text-center flex-col'>
              <h1 className='font-bold text-5xl '>4</h1>
              <h2 className='text-md'>Meta Diaria</h2>
          </div>
          {/* meta mensual */}
          <div className='bg-orange-400 text-white w-full h-20 m-2 rounded-xl flex items-center text-center flex-col'>
              <h1 className='font-bold text-5xl '>50</h1>
              <h2 className='text-md'>Meta Mensual</h2>
          </div>
        </div>
       {/* graficas  */}
    </div>
    <div className='h-auto w-auto flex lg:flex-row flex-col gap-2  p-2'>
       {/* grafica de mes */}
      <div className='w-full h-64 bg-white bg-opacity-20 backdrop-blur-sm shadow rounded-xl'>
        <BarraVertical />
      </div>
      <div className='w-full h-64 bg-white bg-opacity-20 backdrop-blur-sm shadow rounded-xl'>
        <Dona />
      </div>

    </div>
    <div className='h-auto w-auto flex lg:flex-row flex-col gap-2  p-2'>
       {/* grafica de mes */}
      <div className='w-full h-64 bg-white bg-opacity-20 backdrop-blur-sm shadow rounded-xl'>
        <Area />
      </div>
      <div className='w-full h-64 bg-white bg-opacity-20 backdrop-blur-sm shadow  rounded-xl'>
        <HorizontalBarr />
      </div>

    </div>
    
    </>
  )
}
