import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { useState } from 'react'
import { formateardinero } from '../hooks/moneda'
import { toast } from 'react-toastify'

export default function Financiero() {
  const {vehiculoseleccionado,asesoriosseleccionados,remplaceasesorioslista,handleclickfinanciero} = useBpsystem()
  const [vf,setvf] = useState(0) /*valor a financiar*/
  const [mm,setmm] = useState(0) /*meses manual*/
  const [cuotax,setcuotax] = useState(0) /*couta extra*/
  const [tasa,settasa] = useState(0) /*tasa de interes*/
  const [cuarentayochomeses,setcuarentayochomeses] = useState(0) /*tasa de interes*/
  const [sesentameses,setsesentameses] = useState(0) /*tasa de interes*/
  const [setentaydosmeses,setsetentaydosmeses] = useState(0) /*tasa de interes*/
  const [ochentameses,setochentameses] = useState(0) /*tasa de interes*/
  const [mesesmanuales,setmesesmanuales] = useState(0) /*tasa de interes*/
  
  const handlechickcalcular = () => {

    if(vf && tasa){
      const tasas = Number(tasa)/100
      setcuarentayochomeses((Number(vf) * (tasas* Math.pow((1+ tasas),48))/(Math.pow((1+ tasas),48)-1))+((Number(vf)/1000000)*1200))
      setsesentameses(Number(vf) * (tasas* Math.pow((1+ tasas),60))/(Math.pow((1+ tasas),60)-1)+((Number(vf)/1000000)*1200))
      setsetentaydosmeses(Number(vf) * (tasas* Math.pow((1+ tasas),72))/(Math.pow((1+ tasas),72)-1)+((Number(vf)/1000000)*1200))
      setochentameses(Number(vf) * (tasas* Math.pow((1+ tasas),84))/(Math.pow((1+ tasas),84)-1)+((Number(vf)/1000000)*1200))
     
      if(mm){
        setmesesmanuales(Number(vf) * (tasas* Math.pow((1+ tasas),Number(mm)))/(Math.pow((1+ tasas),Number(mm))-1)+((Number(vf)/1000000)*1200))
      }
      }
  }
  const guardarfinanciero = () => 
  {
    const data = {
        vehiculo_kilometraje:vehiculoseleccionado.kilometraje,
        vehiculo_foto:vehiculoseleccionado.foto1,
        vehiculo_placa:vehiculoseleccionado.placa,
        vehiculo_id:vehiculoseleccionado.id,
        vehiculo_marca_id:vehiculoseleccionado.marcas.id,
        vehiculo_marca_nombre:vehiculoseleccionado.marcas.nombre,
        vehiculo_modelo_id:vehiculoseleccionado.modelos.id,
        vehiculo_modelo_nombre:vehiculoseleccionado.modelos.year,
        vehiculo_valor:vehiculoseleccionado.valor,
        valor_financiamiento:vf,
        couta_extra:cuotax,
        tasa_interes:tasa,
        numerodemeses_manual:mm,
        cuarentayochomeses:cuarentayochomeses,
        sesentameses:sesentameses,
        setentaydosmeses:setentaydosmeses,
        ochentameses:ochentameses,
        mesesmanuales:mesesmanuales,
        asesorios:asesoriosseleccionados
            }
            handleclickfinanciero(data)
        toast.success('informacion guardada con exito')
  }
  return (
    <>
    <div className='p-5 m-2 rounded-xl border-2 flex flex-col text-rigth '>
      
      <div className='flex flex-row mt-3 mb-3 border-b-2 overflow-hidden'>
      <div className='mt-2 w-full'>
        <label htmlFor="" className='text-xl font-bold'>Vehiculo</label>
          <div className='flex flex-row gap-2'>
            <p className='text-lg font-bold text-slate-600'>Placa:</p>
            <p className='text-lg'>{vehiculoseleccionado.placa}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-lg font-bold text-slate-600'>Kilometraje:</p>
            <p className='text-lg'>{vehiculoseleccionado.kilometraje}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-lg font-bold text-slate-600'>Valor:</p>
            <p className=' p-2 border-b-4 border-sky-500 text-xl font-bold text-black rounded-sm'>{vehiculoseleccionado.valor}</p>
          </div>
      </div>
      <div className='w-full overflow-auto'>
        <label htmlFor="" className='text-xl font-bold'>Asesorios</label>

        {asesoriosseleccionados.map(asesorio=>
           <div key={asesorio.id} className='flex flex-row gap-3 mt-1'>
           <p>Id: {asesorio.id}</p>
           <p>{asesorio.nombre}</p>
           <p>{asesorio.marca}</p>
           <p>${asesorio.valor}</p>
           <button className='hover:bg-red-500 p-1 bg-sky-500 text-white rounded-full'
           onClick={()=> {
            const nuevo = asesoriosseleccionados.filter(asesorios => asesorios.id !== asesorio.id)
            remplaceasesorioslista(nuevo)
           }
           
            

           
           }
           >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
             </svg>
           </button>
         </div>
          )}
      </div>
      </div>
      <label htmlFor="">Valor a financiar</label>
        <input type="numer" 
        onChange={(e)=> setvf(e.target.value)}
        className='w-1/2 p-1 border-2 rounded-xl'/>
       
        <label htmlFor="" className='text-xl font-bold'>Numero de meses manual</label>
        <input type="numer"  
        onChange={(e)=>setmm(e.target.value)}
        className='w-20 p-1 border-2 rounded-xl'/>
        <label htmlFor="">Cuota extra</label>
        <input type="numer"  
         onChange={(e)=>setcuotax(e.target.value)}
        className='w-32 p-1 border-2 rounded-xl'/>
        <label htmlFor="">Tasa de interes</label>
        <input type="numer"  
        onChange={(e)=>settasa(e.target.value)}
        className='w-32 p-1 border-2 rounded-xl'/>
        <button className='p-3 bg-sky-800 w-20 m-2 rounded-xl text-white font-bold'
        onClick={()=> handlechickcalcular()}>
          Calcular
        </button>
       <div className='mt-2 border-2 p-3 rounded-xl flex flex-col gap-3'>
       <div className='flex flex-row gap-2 w-1/3 font-bold text-xl text-white bg-indigo-500 p-1 rounded-xl'>
          <label htmlFor="" className='p-2'>48 meses</label>
          <p className='p-2 text-xl font-bold text-black'>{formateardinero(cuarentayochomeses)}</p>
        </div>
        <div className='flex flex-row gap-2 w-1/3 font-bold text-xl text-white bg-indigo-500 p-1 rounded-xl'>
          <label htmlFor="" className='p-2'>60 meses</label>
          <p className='p-2 text-xl font-bold text-black'>{formateardinero(sesentameses)}</p>
        </div>
        <div className='flex flex-row gap-2 w-1/3 font-bold text-xl text-white bg-indigo-500 p-1 rounded-xl'>
          <label htmlFor="" className='p-2'>72 meses</label>
          <p className='p-2 text-xl font-bold text-black'>{formateardinero(setentaydosmeses)}</p>
        </div>
        <div className='flex flex-row gap-2 w-1/3 font-bold text-xl text-white bg-indigo-500 p-1 rounded-xl'>
          <label htmlFor="" className='p-2'>84 meses</label>
          <p className='p-2 text-xl font-bold text-black'>{formateardinero(ochentameses)}</p>
        </div>
        <div className='flex flex-row gap-2 w-1/3 font-bold text-xl text-white bg-indigo-500 p-1 rounded-xl'>
          <label htmlFor="" className='p-2'>{mm} meses</label>
          <p className='p-2 text-xl font-bold text-black'>{formateardinero(mesesmanuales)}</p>
        </div>
        <div className='flex flex-row gap-2 w-1/3 font-bold text-xl text-white bg-indigo-500 p-1 rounded-xl'>
          <label htmlFor="" className='p-2'>{formateardinero(Number(vf)/1000)} Valor de seguro de vida 1200* Millon</label>
          
        </div>

       </div>
       
        <div className='grid place-items-center mt-2'>
           <button className='text-xl p-2 rounded-xl bg-sky-800 hover:bg-sky-500 w-1/3 font-bold text-white'
            onClick={()=> guardarfinanciero()}
           >Guardar</button>
        </div>
    </div>
    
    
    </>
  )
}
