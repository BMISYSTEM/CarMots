import {createRef,useState} from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios'
import { toast } from 'react-toastify'


export default function Login() {

    //con esto recepciono los datos del formulario
    const emailRef = createRef()
    const passwordRef = createRef()
    const [spiner,setSpiner] = useState(0)
    const [spiner2,setSpiner2] = useState(0)
    const [error,setErrores] = useState([])
    const [permisos,setpermisos] = useState([])
    const {setPermisos} = useBpsystem()

    const {login,isLoading,errores} = useAuth(
        {
            middleware: 'guest',
            url: '/panel/dashboard'
        }
    )
    if(error?.response?.data){
        // console.log(error)
        const errores = error?.response?.data?.errors
        const email = error?.response?.data?.errors?.email
        toast.error(errores[0]) 
        if(error?.response?.data?.errors?.email)
        {
            toast.error(email[0]) 
        }
        
        setErrores([])
    }
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
       login(datos,setErrores,setpermisos)
        console.log(permisos);
       toast.success('Iniciando seccion')
    }
    
    
  return (
    <>
        {/* div principal */}
        <div className='w-full h-full sm:bg-white sm:w-1/3 sm:h-auto flex flex-col items-center justify-center shadow rounded-lg '>
                <h1 className='text-center font-bold my-3'>Inicio session</h1>
                <form className='flex flex-col p-5 w-full'
                        onSubmit={handleSubmit}>
                    <label htmlFor="">Correo</label>
                    <input type="text" className='block w-full rounded-md border-0 py-1.5
                             text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                             focus:ring-indigo-600 sm:text-sm sm:leading-6'
                             name='email'
                             ref={emailRef}/>
                    <label htmlFor="">Password</label>
                    <input type="password" className='block w-full rounded-md border-0 py-1.5
                             text-gray-900 shadow-sm ring-1 ring-inset
                            ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset
                             focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                             name='password'
                             ref={passwordRef}/>
                    <div className='text-sky-800 text-sm'>
                        <Link>Olvido su password?</Link>
                    </div>
                    <input type="submit" value="Registrar" 
                            onClick={()=>setSpiner(1)}
                            className='bg-sky-500 rounded-md p-3 mt-5 text-white font-bold shadow hover:bg-sky-800 cursor-pointer' />
                </form>
                <div className='text-sky-800 mx-2 mb-4'>
                    <Link to={'/registro'}>No tiene cuenta? Registrese en CarMot</Link>
                </div>
                <div className={`${spiner2 ? "":"hidden"}`}>
                    <img src="../img/loading.gif" alt="" />
                </div>
            
        </div>
    </>
  )
}
