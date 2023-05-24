import {useState } from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { useAuth } from '../hooks/useAuth'
import { toast } from 'react-toastify'
import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import spliter from '../../public/img/recatspiner.gif'
import logo from '../../public/img/L-SYPROD.png'
import LoadingAside from './LoadingAside'

export default function Aside() {
  
  const [submenuDasboard,setSubmenuDashboard] = useState(true)
  const {logaut,permisosuser} = useAuth({middleware:'auth'})
  const [submenuAjuste,setSubmenuAjuste] = useState(true)
  const [barraTitulos,setBarraTitulos] = useState(true)
  const [seleccionado,setSeleccionado] = useState(0)
  const [inicio,setInicio] = useState(0)
  const [p,setPermisos] = useState(0)
  const {modonoche,setModonoche,setmenucarga} = useBpsystem()
  const [barra,setBarra] = useState(true)
  const Navigate = useNavigate();
  const [seleccion,setSeleccion] = useState('')
  const [submenuusuarios,setsubmenuusuarios] = useState(true)

// console.log(submenuusuarios)
  if(inicio === 0){
    
    permisosuser(setPermisos)
    setInicio(1)
  }
  const cerrarsession = () =>{
    logaut()
    toast.success('hasta luego')
    setPermisos([])
  }
  if(p===0){
    return (
          <LoadingAside />
        );
  }
 
  //permisos de las pantallas 
  const dashboard =p['dashboard']            ? 1 : 0
  const administrador =p['administrador'] ? 1 : 0
  const usuarios =p['usuarios'] ? 1 : 0
  const recepcion =p['recepcion'] ? 1 : 0
  const ajustes =p['ajustes'] ? 1 : 0
  const campanas =p['campanas'] ? 1 : 0
  const contabilidad =p['contabilidad'] ? 1 : 0
  const transferencias =p['transferencias'] ? 1 : 0
  const proveedor =p['proveedor'] ? 1 : 0
  // console.log(p)
  return (
    <>
        <aside className={`${barra ? "md:w-1/5 md:relative  h-screen absolute w-full" : 
          "md:w-1/12 md:h-screen h-12 mb-4 overflow-hidden flex  flex-col  absolute md:relative w-full"} 
          ${modonoche ? "bg-black text-white border-slate-800": "bg-white border-slate-200"}
          z-40 w-1/   backdrop-blur-sm shadow-xl ml-px border-r-2  -mx-1 overflow-auto`}>
          {/* aqui van las opciones que van a provenir de base de datos */}
            <div className='md:h-1/5 grid place-items-center'>
              <div className='hover:text-indigo-600 cursor-pointer'
                onClick={()=> {
                    setBarra(!barra)
                    setBarraTitulos(!barraTitulos)
                  }}
                >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>

              </div>

            </div>
          {/* MENU DASHBOARD */}
          {dashboard ? 
              <Link to={'/panel/dashboard'} onClick={()=>setSeleccion('dasboard')}>
              <div 
                    className={`flex ${barraTitulos ? "":"md:justify-center "} 
                    ${seleccion == 'dasboard'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
                     "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" } `} 
                    onClick={()=> {
                        setSubmenuDashboard(!submenuDasboard)
                      }}
                >
                   
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 
                      1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      <span className={`${barraTitulos ? "": "md:hidden"} `}>
                        Dashboard
                      </span>
                   
              </div>
                  </Link>
          : 
          ""}
          {/* submenu */}
          <div className={`${submenuDasboard ? "hidden" : barraTitulos ? "" :"hidden"} flex flex-col w-auto text-center gap-1`} id='submenu' >
            <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
              <Link to={'/panel/dashboard/vendidos'}>Vendidos</Link>
            </div>
            <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
              <Link >Pendientes</Link>
            </div>
            <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
              <Link >Aprobados</Link>
            </div>
          </div>
          <Link to={'/panel/project'} onClick={()=>setSeleccion('project')}>
          <div className={` flex ${barraTitulos ? "":"md:justify-center"} 
          ${seleccion == 'project'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
          "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" } `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>

            <span className={`
            
            ${barraTitulos ? "": "md:hidden"} `}>
              Project
            </span>
          </div>
          </Link>
          {/* MENU ADMINISTRADOR */}
          {administrador ? 
          <Link to={'/panel/administrador'} onClick={()=>setSeleccion('administrador')}>
            <div className={`flex ${barraTitulos ? "":"md:justify-center"} 
             ${seleccion == 'administrador'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
             "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" } `}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={`
              ${barraTitulos ? "": "md:hidden"} `}>
                Administrador
              </span>
            </div>
            </Link>
          : ""}
          {/* MENU USUARIOS */}
          {usuarios ? 
          <Link to={'/panel/usuarios'} onClick={()=>setSeleccion('usuarios')}>
              <div 
              onClick={()=>setsubmenuusuarios(!submenuusuarios)}
              className={`flex ${barraTitulos ? "":"md:justify-center"}  
              ${seleccion == 'usuarios'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
              "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" }`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span className={`${barraTitulos ? "": "md:hidden"} `}>
                  Ususarios
                </span>
              </div>
              </Link>
          : ""}
        
           
          {recepcion ? 
          <Link to={'/panel/recepcion'} onClick={()=>setSeleccion('recepcion')}>
            <div className={`flex ${barraTitulos ? "":"md:justify-center"} 
            ${seleccion == 'recepcion'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
            "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" }`} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <span className={`${barraTitulos ? "": "md:hidden"} `}>
                Recepcion
              </span>
            </div>
            </Link>
          : ""}
          {/* MENU AJUSTES */}
          {ajustes ? 
            <div className={` 
            
            flex ${barraTitulos ? "":"md:justify-center"} rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:cursor-pointer hover:text-indigo-600`} 
                  onClick={()=> {
                      setSubmenuAjuste(!submenuAjuste)
                    }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 
                0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0
                  00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 
                  0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              <span className={`${barraTitulos ? "": "md:hidden"} `}>
                Ajustes
              </span>
            </div>
          : ""}
          {ajustes ? 
            <div className={`${submenuAjuste ? "hidden" : barraTitulos ? "" :"hidden"} hover:cursor-pointer flex flex-col w-auto text-center gap-1`} id='submenu' >
              <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
                <Link to={'/panel/ajustes/marcas'}>Marcas</Link>
              </div>
              <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
                <Link to={'/panel/ajustes/modelos'}>Modelos</Link>
              </div>
              <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
                <Link to={'/panel/ajustes/estados'}>Estados</Link>
              </div>
              <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
                <Link to={'/panel/ajustes/vehiculos'}>Vehiculos</Link>
              </div>
              <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
                <Link to={'/panel/ajustes/financieras'}>Financieras</Link>
              </div>
              <div className='my-1 font-sans hover:bg-slate-300 hover:text-indigo-600 cursor-pointer mx-6'>
                <Link to={'/panel/ajustes/creditos'}>Creditos</Link>
              </div>
            </div>
          : ""}
          {/* MENU CAMPAÑAS */}
          {campanas ? 
          <Link to={'/panel/campanas'} onClick={()=>setSeleccion('campanas')}>
            <div className={`
            
            flex ${barraTitulos ? "":"md:justify-center"}
            ${seleccion == 'campanas'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
            "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" }`} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

              <span className={`${barraTitulos ? "": "md:hidden"} `}>
                Campañas
              </span>
            </div>
            </Link>
          : ""}
          {/* MENU CONTABILIDAD */}
          {contabilidad ? 
          <Link to={'/panel/contabilidad'} onClick={()=>setSeleccion('contabilidad')}>
            <div className={` 
            
            flex ${barraTitulos ? "":"md:justify-center"}
             ro${seleccion == 'contabilidad'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
             "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" }`} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
              <span className={`${barraTitulos ? "": "md:hidden"} `}>
                Centro financiero
              </span>
            </div>
            </Link>
          : ""}
          {/* MENU TRENSFERENCIAS */}
          {transferencias ? 
          <Link to={'/panel/transferencia'} onClick={()=>setSeleccion('transferencias')}>
            <div className={` 
            
            flex ${barraTitulos ? "":"md:justify-center"}
            ${seleccion == 'transferencias'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
            "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" }`} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`${barraTitulos ? "": "md:hidden"} `}>
                Transferencias
              </span>
            </div>
            </Link>
          : ""}
          {/* MENU PROVEEDOR */}
          {proveedor ?
           <Link to={'/panel/proveedor'} onClick={()=>setSeleccion('proveedor')}>
            <div className={` 
            
            flex ${barraTitulos ? "":"md:justify-center"}
            ${seleccion == 'proveedor'? "bg-slate-300 text-indigo-600 rounded-xl gap-2 p-2 m-2 ":
            "rounded-xl gap-2 p-2 m-2 w-auto hover:bg-slate-300 hover:text-indigo-600" }`} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>
              <span className={`${barraTitulos ? "": "md:hidden"} `}>
               Provedor
              </span>
            </div>
            </Link>
          : ""}
          <div className='w-auto h-auto flex items-center justify-center' onClick={()=>{
            cerrarsession()}}>
            <img 
                src={logo} 
                alt="Logo syprod creadores del sistema" 
                className='w-16 p-0 m-0 h-16 '/>
          </div>
        </aside>
    </>
  )
}
