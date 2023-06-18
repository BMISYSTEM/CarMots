import React from 'react'
import { useState } from 'react'
import ModalVehiculos from '../../../../Componentes/ModalVehiculos'
import Asesorios from '../../../../Componentes/Asesorios'
import Financiero from '../../../../Componentes/Financiero'
import Documentacion from '../../../../Componentes/Documentacion'
import Matricula from '../../../../Componentes/Matricula'
import Retoma from '../../../../Componentes/Retoma'
import Pdf from '../../../../Componentes/Pdf'
import useBpsystem from '../../../../hooks/useBpsystem'

export default function Cotizacion() {
    const {remplaceasesorioslista} = useBpsystem()
    const [pantalla,setpantalla] = useState('')
    
  return (
    <>
    <div className='flex flex-col p-5 border-2 rounded-xl m-2 h-auto overflow-auto'>
        <div className='flex flex-row gap-3'>
            <button 
            onClick={()=>setpantalla('vehiculo')}
            className={`${pantalla == 'vehiculo' ? "border-b-2 border-amber-500 text-lg font-bold" 
            : "hover:border-b-2 hover:border-amber-500"}`}>Vehiculo</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <button 
            onClick={()=>setpantalla('asesorios')}
            className={`${pantalla == 'asesorios' ? "border-b-2 border-amber-500 text-lg font-bold" 
            : "hover:border-b-2 hover:border-amber-500"}`}>Asesorios</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <button
            onClick={()=>setpantalla('financiero')}
             className={`${pantalla == 'financiero' ? "border-b-2 border-amber-500 text-lg font-bold" 
             : "hover:border-b-2 hover:border-amber-500"}`}>Financiero</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <button 
            onClick={()=>setpantalla('documentacion')}
            className={`${pantalla == 'documentacion' ? "border-b-2 border-amber-500 text-lg font-bold" 
            : "hover:border-b-2 hover:border-amber-500"}`}>Documentacion</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <button 
            onClick={()=>setpantalla('matricula')}
            className={`${pantalla == 'matricula' ? "border-b-2 border-amber-500 text-lg font-bold" 
            : "hover:border-b-2 hover:border-amber-500"}`}>Matricula</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <button 
            onClick={()=>setpantalla('retoma')}
            className={`${pantalla == 'retoma' ? "border-b-2 border-amber-500 text-lg font-bold" 
            : "hover:border-b-2 hover:border-amber-500"}`}>Retoma</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <button 
            onClick={()=>setpantalla('pdf')}
            className={`${pantalla == 'pdf' ? "border-b-2 border-amber-500 text-lg font-bold" 
            : "hover:border-b-2 hover:border-amber-500"}`}>PDF</button>
        </div>
        <div className='overflow-hidden'>
           {pantalla == 'vehiculo'? 
           <ModalVehiculos />
           : ""} 
           {pantalla == 'asesorios'? 
           <Asesorios />
           : ""} 
           {pantalla == 'financiero'? 
           <Financiero />
           : ""} 
           {pantalla == 'documentacion'? 
           <Documentacion />
           : ""} 
           {pantalla == 'matricula'? 
           <Matricula />
           : ""} 
           {pantalla == 'retoma'? 
           <Retoma />
           : ""} 
           {pantalla == 'pdf'? 
           <Pdf />
           : ""} 
        </div>
    </div>
    
    
    
    </>
  )
}
