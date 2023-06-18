import { useRef, useState } from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { json } from 'react-router-dom'
import { useClientes } from '../hooks/useClientes'
import { useEstados } from '../hooks/useEstados'
import { useMarcas } from '../hooks/useMarcas'
import { useModelos } from '../hooks/useModelos'

export default function ModalCoptionente() {
    const {componente,handleClickModalCliente,modonoche,clienteseleccionado} = useBpsystem()
    const {clientesall,clientesloading} = useClientes()
    const {estadosall,estadosloading }= useEstados()
    const {marcas,isLoading} = useMarcas()
    const {modelosdata,loadingModelos} = useModelos()
    
    

    const nombre = useRef()
    const apellido = useRef()
    const telefono = useRef()
    const email = useRef()
    const comentario = useRef()
    const estadonuevo = useRef()
    if(clientesloading || estadosloading || isLoading || loadingModelos){
        return (
            <p>cargando informacion...</p>
        )
    }
    const cliente = Object.values(clientesall?.data?.data?.filter(clientes => clientes.id == clienteseleccionado)) 
    const marcavehiculo = marcas?.marcas.filter(marcas => marcas.id === cliente[0]?.vehiculo?.marcas)
    const modelo = modelosdata?.modelos.filter(modelos => modelos.id === cliente[0]?.vehiculo?.modelos)
            return(
                <>
                    <div className='lg:w-auto w-screen h-screen lg:h-full bg-opacity-20 backdrop-blur-lg flex flex-col overflow-auto mb-32 lg:mb-0 lg:p-0 pb-24 pt-40 z-50 px-3'>
                        <div className="flex justify-end items-end">
                            <button type="button"
                                    onClick={() => handleClickModalCliente(clienteseleccionado)} className='hover:text-red-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeoptionnecap="round" strokeoptionnejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div >
                        <div className='flex lg:flex-row flex-col gap-5 h-auto mt-12 '>
                            <div>
                                <h1 className='text-xl font-bold text-slate-800 m-2 text-center'>Cliente</h1>
                                    <p className='text-xl font-bold text-slate-600 m-2'>
                                    Nombre: {cliente[0]?.nombre}
                                    </p>
                                    <p className='text-xl font-bold text-slate-600 m-2'>
                                    Apellido: {cliente[0]?.apellido}
                                    </p>
                                    <p className='text-xl font-bold text-slate-600 m-2'>
                                    Cedula: {cliente[0]?.cedula}
                                    </p>
                                    <p className='text-xl font-bold text-slate-600 m-2'>
                                    Telefono: {cliente[0]?.telefono}
                                    </p>
                                    <p className='text-xl font-bold text-slate-600 m-2'>
                                    Correo: {cliente[0]?.email}
                                    </p>
                            </div>
                            <div>
                                <p className='text-xl font-bold text-slate-800 m-2 text-center'>Vehiculo</p>
                                <p className='text-xl font-bold text-slate-600 m-2'>
                                    Marca: {marcavehiculo[0]?.nombre}
                                    </p>
                                <p className='text-xl font-bold text-slate-600 m-2'>
                                    Modelo: {modelo[0]?.year}
                                    </p>
                                <p className='text-xl font-bold text-slate-600 m-2'>
                                    Kilometraje: {cliente[0]?.vehiculo?.kilometraje}
                                    </p>
                                <p className='text-xl font-bold text-slate-600 m-2'>
                                    Valor:$ {cliente[0]?.vehiculo?.valor}
                                    </p>
                                <p className='text-xl font-bold text-slate-600 m-2'>Medio compra:##</p>
                            </div>
                            
                        </div>
                            
                    </div>
                
                
            </>
            )
         
    
        
 
}
