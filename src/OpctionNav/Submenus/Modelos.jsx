import { useState,createRef } from 'react';
import useBpsystem from '../../hooks/useBpsystem';
import { useModelos } from '../../hooks/useModelos';
import { toast } from 'react-toastify';


export default function Modelos() {
    const {modonoche,setModeloserror} = useBpsystem()
    const {modelosdata,loadingModelos,errorModel,createmodelos} = useModelos()
    const [modelo,setModelo] = useState('')
    const modelor = createRef()
    const token = localStorage.getItem('TOKEN_USER')
    // console.log(modelosdata)
const handleclik =  (e) =>{
    e.preventDefault()
    const datos = {
        year: modelo 
    }
     createmodelos(datos)
    // console.log(datos)
    toast.success('guardando...')
    
}
if(loadingModelos){
    return (
    <>
            <div className='w-full  h-screen grid place-items-center '>
            <img src="../../img/recatspiner.gif" alt="cargando..." />
            <p>cargando...</p>
            </div>
        </>
    );
    }
    if (errorModel?.response?.data?.errors) {
    
        let mensajes = []
        mensajes = Object.values(errorModel.response.data.errors)
       
        for (let index = 0; index < mensajes.length; index++) {
          toast.error(mensajes[index][0])
        }
        

        setModeloserror([])
        
      }
  return (
    <>
    <div className='flex flex-row w-auto h-full gap-3 '>
      {/* creacion de  */}
        <div className='w-full h-auto p-3'>
          <div className='rounded-xl border-2 border-slate-200   w-full h-full'>

              {/* captura de datos para los modelos */}
              <form className='flex flex-col justify-center text-center items-center mt-5'
               onSubmit={handleclik}>
                <label htmlFor="">Nombre Modelos</label>
                <input type="number" min="1900" max="2999" onChange={e => setModelo(e.target.value)} className={`${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
                  flex text-center  w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  ref={modelor}/>
                <input type="submit" value={'Guardar'}
                className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer'/>
              </form>
          </div>
        </div>
        {/* listado y busqueda */}
        <div className=' w-full h-auto flex flex-col text-center'>

          {/* listado de las clases */}
          <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full text-xl font-bold border-b-2 border-slate-200 '>
                  <td >id</td>
                  <td>Modelo</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                
                  
                    {modelosdata?.modelos?.map(row=>(
                      <tr key={row.id} className=' text-center w-full  border-b-2 border-slate-200  hover:cursor-pointer text-sm'>
                        <td >{row['id']}</td>
                        <td>{row['year']}</td>
                        <td>
                            <p  className='flex flex-row text-center justify-center'>
                              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white bg-sky-300 p-1 hover:bg-red-500 rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                            </p>
                        </td>
                      </tr>
                    ))
                    }  
              </tbody>
            </table>

        </div>
    </div>
    </>
  )
}