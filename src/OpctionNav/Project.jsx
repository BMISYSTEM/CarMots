import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import Gantt from '../Graficas/Gantt'

export default function Project() {
    const {modonoche,setModonoche} = useBpsystem()
  return (
    <>
    <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} w-auto h-full  flex flex-row`}>

        {/* creacion de tarea */}
        <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} w-1/2  h-auto p-2 m-2 rounded-xl border-2 border-slate-200 flex flex-col gap-3`}>
            <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} h-1/2 w-full  border-2 border-slate-200 rounded-xl p-1 flex flex-col gap-6`}>
                <form className='flex flex-col'>
                    <section>
                        <label htmlFor="">Descripcion</label>
                        <input type="text" 
                        className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5
                        text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400
                            focus:ring-2 focus:ring-inset
                        focus:ring-indigo-600 sm:text-sm sm:leading-6`}/>
                       
                    </section> 
                    <section className='flex flex-row gap-3'>
                        <div>
                            <label htmlFor="">Fecha inicio</label>
                                <input type="date" 
                                className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5
                                text-gray-900 shadow-sm ring-1 ring-inset
                                ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset
                                focus:ring-indigo-600 sm:text-sm sm:leading-6`}/>
                                <label htmlFor="">Fecha fin</label>
                                <input type="date" 
                                className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5
                                text-gray-900 shadow-sm ring-1 ring-inset
                                ring-gray-300 placeholder:text-gray-400
                                    focus:ring-2 focus:ring-inset
                                focus:ring-indigo-600 sm:text-sm sm:leading-6`}/>
                        </div>
                        <div>
                            <label htmlFor="">Valor $</label>
                            <input type="number"
                            className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} block w-full rounded-md border-0 py-1.5
                            text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                            focus:ring-indigo-600 sm:text-sm sm:leading-6`} />
                        </div>
                    </section> 
                    <input type="submit" value="Registrar" className='w-full  bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer '/>
                </form>
                <div className=' rounded-xl border-2 border-slate-200 h-auto mt-3 w-full'>
                <table className='p-3 w-full overflow-auto'>
                    <thead>
                        <tr className='w-full  border-b-2 border-slate-200 '>
                        <td >Descripcion</td>
                        <td>Fecha inicio</td>
                        <td>Fecha fin </td>
                        <td>Valor </td>
                        <td>Editar</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=' text-left w-full  border-b-2 border-slate-200 hover:bg-sky-300 hover:cursor-pointer text-sm'>
                        <td className='text-left'>Venta de vehiculo nuevo</td>
                        <td  className='text-left'>05/12/2023</td>
                        <td  className='text-left'>05/13/2023</td>
                        <td  className='text-left'>$50,000</td>
                        <td><p onClick={()=> handleClickModalUsuario()}>Editar</p></td>
                       </tr>
                    </tbody>
                    </table>
                </div>
            </div>

        </div>
        <div className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"} w-full bg-slate-200 h-auto m-2 rounded-xl`}>
            <Gantt />
        </div>

    </div>
    </>
  )
}
