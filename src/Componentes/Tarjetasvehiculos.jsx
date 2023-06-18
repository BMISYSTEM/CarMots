import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { toast } from 'react-toastify'

export default function Tarjetasvehiculos({vehiculo}) {
  const url = import.meta.env.VITE_API_URL
    const {marcas,modelos,estados,valor,id,placa,foto1,foto2,foto3,foto4,kilometraje} = vehiculo
    const {setSelectvehiculo} = useBpsystem()
    // console.log(id)
  return (
    <>
     <div className=' w-auto h-auto flex flex-col rounded-xl shadow-xl border-2'>
                    <div className='w-full h-auto shadow cursor-pointer '>
                        <img src={url+"/storage/vehiculos/"+ vehiculo['foto1']} className='rounded-xl shadow-xl' alt="" />
                    </div>
                    <div className='mb-0'>
                        <p className='font-bold text-xl'>Marca</p>
                        <p>{marcas.nombre}</p>
                        <p className='font-bold text-xl'>Modelo</p>
                        <p>{modelos.year}</p>
                        <p className='font-bold text-xl'>Estado</p>
                        <p>{estados.estado}</p>
                        <p className='font-bold text-xl'>Valor</p>
                        <p className='text-lg font-bold text-amber-500'>${valor}</p>
                        <button 
                      onClick={()=> {
                                    setSelectvehiculo({
                                      id,
                                      placa,
                                      foto1,
                                      foto2,
                                      foto3,
                                      foto4,
                                      kilometraje,
                                      modelos,
                                      marcas,
                                      valor
                                    })
                                    toast.success('vehiculo añadido a la cotizacion')
                                  }}
                    
                    className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer mb-2'>
                        Seleccionar vehiculo
                        </button>
                    </div>
                </div>
    </>
  )
}
