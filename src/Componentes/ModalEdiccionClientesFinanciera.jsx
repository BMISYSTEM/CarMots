import {useRef} from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { useClientes } from '../hooks/useClientes'
import { useMarcas } from '../hooks/useMarcas'
import { useEstados } from '../hooks/useEstados'
import { toast } from 'react-toastify'

export default function ModalEdiccionClientesFinanciera() {
  const {handleclickeditarclientefinanciera,clienteseleccionediccion} = useBpsystem()
  const {estadosall,estadosloading} = useEstados()
  const {clientesall,updateEstado} = useClientes()
  const cliente = clientesall.data.data
  const clienteselect = cliente.filter(cliente => cliente.id == clienteseleccionediccion )
  const estado = useRef('')
  if(estadosloading){
    return (
      <p>cargando informacion...</p>
    )
  }
  //cambiar el estado
  const handlecliccambioestado = () => 
  {
    if(cliente[0].estado.id == estado.current.value){
      toast.success('el estado no cambia es el mismo')
    }else{
      const nombre_estado = estadosall.estados.filter(estados=> estados.id==estado.current.value)
      const data = {
        id:estado.current.value,
        cliente:clienteselect[0]?.id,
        user:clienteselect[0]?.user.id,
        user_name:clienteselect[0]?.user.name,
        nombre_estado: nombre_estado[0].estado
      }
      updateEstado(data)
      
      toast.success('Actualizando estado')
    }

  }
  return (
    <>
    <div className='bg-white w-auto p-5 shadow-xl h-auto rounded-xl flex flex-col'>
        <div className="flex justify-end">
            <button type="button"
                    onClick={() => handleclickeditarclientefinanciera()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <label htmlFor="" className='text-xl font-bold text-slate-600'>Cliente</label>
          <p>{clienteselect[0]?.nombre}</p>
          <label htmlFor="" className='text-xl font-bold text-slate-600'>estado actual </label>
          <p>{clienteselect[0]?.estado.estado}</p>
          <label htmlFor="" className='text-xl font-bold text-slate-600'>cambio de estado </label>
          <select name="" id="" className='p-1'  
          ref={estado}
          >
          <option value="">cabio de estado</option>
            {estadosall.estados.map(estado=> 
              <option value={estado.id}>{estado.estado}</option>
              )}
          </select>
          <textarea name="" id="" cols="30" rows="5" className='border-2 border-slate-200 rounded-xl'>

          </textarea>
          <button 
          onClick={()=>handlecliccambioestado()}
            className='p-3 m-1 bg-sky-800 rounded-xl text-white font-bold shadow-sm hover:bg-sky-500'>
            Guardar datos
          </button>
        </div>
    </div>
    
    </>
  )
}
