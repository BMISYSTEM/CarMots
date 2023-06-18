import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { useClientes } from '../hooks/useClientes'
import { toast } from 'react-toastify'

export default function ModalClientesCentrofinanciero() {
    const {handleclickModalClienteCentrofinanciero,clienteselecciondocumentos} = useBpsystem()
    const {documentosDescarga,clientesall} = useClientes()
    const cliente = clientesall?.data?.data
    const selectcliente = cliente.filter(cliente=> cliente.id == clienteselecciondocumentos)

    const handleclicCedula = (doc) => 
    {
        if(doc){
            const data = {
                documento:doc
            }
            documentosDescarga(data)
            toast.success('en breve iniciara su descarga')
        }else{
            toast.error('No hay documento para descragar')
        }
        
    }
  return (
    <>
    <div className='w-auto bg-white border-2 h-auto grid place-item-center gap-5 p-5 shadow-xl'>
        <div className="flex justify-end">
            <button type="button"
                    onClick={() => handleclickModalClienteCentrofinanciero()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <h1 className='text-lg font-bold '>Documentos adjuntados por el asesor</h1>
        <button 
        onClick={()=>handleclicCedula(selectcliente[0].doccedula)}
        className='bg-slate-200 flex flex-row justify-between gap-5 rounded-xl shadow-lg hover:bg-green-500 hover:text-white p-3'>
            Cedula
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        </button>
        <button 
        onClick={()=>handleclicCedula(selectcliente[0].docestartos)}
        className='bg-slate-200 flex flex-row justify-between gap-5 rounded-xl shadow-lg hover:bg-green-500 hover:text-white p-3'>
            Estratos bancarios
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        </button>
        <button 
        onClick={()=>handleclicCedula(selectcliente[0].docdeclaracion)}
        className='bg-slate-200 flex flex-row justify-between gap-5 rounded-xl shadow-lg hover:bg-green-500 hover:text-white p-3'>
            Declaracion de renta
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        </button>
        <button 
        onClick={()=>handleclicCedula(selectcliente[0].docsolicitud)}
        className='bg-slate-200 flex flex-row justify-between gap-5 rounded-xl shadow-lg hover:bg-green-500 hover:text-white p-3'>
            Solicitud de credito
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        </button>


    </div>
    </>
  )
}
