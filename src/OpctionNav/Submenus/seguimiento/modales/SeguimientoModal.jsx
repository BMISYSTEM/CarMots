import { useState } from 'react'
import useBpsystem from '../../../../hooks/useBpsystem'
import { Link } from 'react-router-dom'
import Cotizacion from './Cotizacion'
import { useNota } from '../../../../hooks/useNotas'
import Loading from '../../../../Componentes/Loading'
import { useRef } from 'react'
import {useEstados} from '../../../../hooks/useEstados'
import { useClientes } from '../../../../hooks/useClientes'
import { useResultado } from '../../../../hooks/useResultados'
import { toast } from 'react-toastify'

export default function SeguimientoModal() {
  const {hndelclickmodalseguimiento,seguimientoModal,clienteseleccionseguimiento} = useBpsystem()
  const {clientesall,clientesloading} = useClientes()
  const {notaall,notaloading,createNota,error} = useNota()
  const {estadosall,estadosloading} = useEstados()
  const {resultadoall,resultadoloading} = useResultado()
  const [pantalla,setPantalla] = useState('nota')
  const [errores,seterror]=useState()
  //datos 
  const comentario = useRef()
  const proximo = useRef()
  const nestado = useRef()
  const  resultado = useRef()


  if(notaloading || estadosloading  || resultadoloading || clientesloading){
    return (
      <Loading />
    )
  }
  const cliente = clientesall?.data?.data
  const clienteselect = cliente.filter(cliente=> cliente.id == clienteseleccionseguimiento )
  const estado = estadosall?.estados
  const notascliente = notaall.filter(nota=> nota.clientes == clienteseleccionseguimiento)
  //muestra los mensajes de error
  if(errores?.response?.data?.errors){
  const erroresall = Object.values(errores?.response?.data?.errors)
  
  let array = []
  if(erroresall){
    for (let index = 0; index < erroresall.length; index++) {
      toast.error(erroresall[index][0])
    }
    seterror([])
  }}
  const handleclicnota = () => {
      const data ={
        'comentario':comentario.current.value,
        'proximo':proximo.current.value,
        'estado':nestado.current.value,
        'resultado':resultado.current.value,
        'cliente':clienteselect[0].id
      }
      createNota(data,seterror)
      
  }
  return (
    <>
    <div className='w-2/3 h-5/6 border-2 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden absolute'>
      <div className="flex justify-end">
            <button type="button"
                    onClick={() => hndelclickmodalseguimiento()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <div className='flex flex-row justify-between h-auto w-full px-5'>
          <button 
          onClick={()=> setPantalla('nota')}
          className={`${pantalla == 'nota'? "bg-amber-500 text-white font-bol rounded-xl p-3": "text-xl font-bold text-slate-800 hover:border-b-2 hover:border-amber-500"}`}>
            Nueva nota
          </button>
          <button 
          onClick={()=> setPantalla('cotizacion')}
          className={`${pantalla == 'cotizacion'? "bg-amber-500 text-white font-bol rounded-xl p-3": "text-xl font-bold text-slate-800 hover:border-b-2 hover:border-amber-500"}`}>
            Cotizacion
          </button>
          <button 
          onClick={()=> setPantalla('solicitud')}
          className={`${pantalla == 'solicitud'? "bg-amber-500 text-white font-bol rounded-xl p-3": "text-xl font-bold text-slate-800 hover:border-b-2 hover:border-amber-500"}`}>
            Solicitud Credito
          </button>
        </div>
        <main className=' overflow-auto'>
          {/* nueva nota */}
          {pantalla == 'nota'? 
          <div className='w-full h-auto p-2 border-2 flex flex-row gap-2'>
          {/* nota */}
            <div className='w-1/2 h-auto border-2 justify-center text-center flex flex-col gap-3 p-3'>
              <p>Comentario</p>
              <textarea name="" id="" cols="30" rows="5" className='border-2 rounded-xl'
              ref={comentario}>

              </textarea>
              <p>Proximo seguimiento</p>
              <input type="date" name="" id="" className='border-2'
              ref={proximo}/>
              <p>Estado actual</p>
              <p>{clienteselect[0]?.estado?.estado}</p>
                <p>Nuevo estado</p>
              <select name="" id="" ref={nestado}>
                <option value="" selected>seleccione</option>
                {estado?.map(estado=> 
                  
                <option value={estado.id} key={estado.id}>{estado.estado}</option>
                  
                  )}
              </select>
              <p>Resultado</p>
              <select name="" id="" ref={resultado}>
                <option value="" selected>seleccione</option>
                {resultadoall.map(resultado=>
                <option value={resultado.id} key={resultado.id}>{resultado.nombre}</option>
                  
                  )}
              </select>
              <button className='font-bold text-white rounded-xl p-3 bg-sky-800 hover:bg-sky-500'
              onClick={()=> handleclicnota()}>
                Guardar
              </button>
            </div>
            {/* seguimiento */}
            <div className='w-full h-auto border-2 overflow-auto'>
            <table className='p-3 '>
                <thead>
                  <tr className='w-full  border-b-2 border-slate-200 text-center text-sm'>
                    <td >id</td>
                    <td >Comentarios</td>
                    <td>Proximo</td>
                    <td>Estado</td>
                    <td>Resultado</td>
                    <td>Asesor</td>
                  </tr>
                </thead>
                <tbody>
                  {notascliente?.map(nota=>
                    
                    <tr key={nota.id} className=' border-b-2 text-center border-slate-200 text-heig text-sm'>
                    <td >{nota.id}</td>
                    <td >
                      <div className='h-auto'>
                      {nota.comentario}
                      </div></td>
                    <td>{nota.proximo_seguimiento}</td>
                    <td>{nota.estado}</td>
                    <td>{nota.nombre_resultado}</td>
                    <td>{nota.nombre_usuario}</td>
                  </tr>
                    )}
                </tbody>

              </table>
            </div>
        </div>
          : ""}
        {pantalla == 'cotizacion' ?  
          <Cotizacion />
        :""}
        </main>
    </div>
    </>
  )
}
