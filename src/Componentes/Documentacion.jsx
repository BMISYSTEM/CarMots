import React, { useState } from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { toast } from 'react-toastify'

export default function Documentacion() {
  const {handleclickdocumentacion} = useBpsystem()
  const [cedula,setcedula] = useState(0)
  const [extratos,setextratos] = useState(0)
  const [carta,setcarta] = useState(0)
  const [desprendibles,setdesprendibles] = useState(0)
  const [solicitud,setsolicitud] = useState(0)
  const [declaracion,setdeclaracion] = useState(0)
  const [camara,setcamara] = useState(0)
  const [certificado,setcertificado] = useState(0)
  const [cartascomerciales,setcartascomerciales] = useState(0)
  const [laboral,setlaboral] = useState(0)
  const [comerciales,setcomerciales] = useState(0)
  const [rut,setrut] = useState(0)
  const [arrendamientos,setarrendamientos] = useState(0)
  const [ingresoyretencion,setingresoyretencion] = useState(0)
  const [proveedor,setproveedor] = useState(0)
  const [pension,setpension] = useState(0)

  const handleclicdocumentacion = () =>
  {
    const data = {

      cedula:cedula ? 1 : 0,
      extratos:extratos ? 1 : 0,
      carta:carta ? 1 : 0,
      desprendibles:desprendibles ? 1 : 0,
      solicitud:solicitud ? 1 : 0,
      declaracion:declaracion ? 1 : 0,
      camara:camara ? 1 : 0,
      certificado:certificado ? 1 : 0,
      cartascomerciales:cartascomerciales ? 1 : 0,
      laboral:laboral ? 1 : 0,
      comerciales:comerciales ? 1 : 0,
      rut:rut ? 1 : 0,
      arrendamientos:arrendamientos ? 1 : 0,
      ingresoyretencion:ingresoyretencion ? 1 : 0,
      proveedor:proveedor ? 1 : 0,
      pension:pension ? 1 : 0
    }
    handleclickdocumentacion(data)
    toast.success('documentacion guardada con exito')
  }
  return (
    <>
    <div>
      <div className='flex flex-col mt-6'>
      <div className=' w-full items-start grid grid-cols-4'>
        <div className=''>

                    <label htmlFor="">Fotocopia de Cedula</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setcedula(!cedula)}>
                      {cedula ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Solicitud de Credito</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setsolicitud(!solicitud)}>
                      {solicitud ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Certificado Laboral</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setlaboral(!laboral)}>
                      {laboral ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Certificado de ingresos y retenciones</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setingresoyretencion(!ingresoyretencion)}>
                      {ingresoyretencion ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Extratos bancarios</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setextratos(!extratos)}>
                      {extratos ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Declaracion de renta</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setdeclaracion(!declaracion)}>
                      {declaracion ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Cartas comerciales</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setcartascomerciales(!cartascomerciales)}>
                      {cartascomerciales ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Factura de proveedores</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setproveedor(!proveedor)}>
                      {proveedor ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Carta cupo (Publicos)</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setcarta(!carta)}>
                      {carta ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Camara y comercio</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setcamara(!camara)}>
                      {camara ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Rut</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setrut(!rut)}>
                      {rut ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Resolucion de la Pension</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setpension(!pension)}>
                      {pension ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Desprendibles, Ultimos 3 meses</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setdesprendibles(!desprendibles)}>
                      {desprendibles ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">Certificado de tradiccion</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setcertificado(!certificado)}>
                      {certificado ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
        <div>

                    <label htmlFor="">contratos de arrendamiento</label>
                    <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setarrendamientos(!arrendamientos)}>
                      {arrendamientos ?
                        <svg width="800px" height="800px" className='w-10 h-10' viewBox="0 -27 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <title/> <desc/> <defs/> <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"> <g fillRule="nonzero" id="switch"> <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/> <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/> </g> </g> </g>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -27 117 117" version="1.1">
                          <title/>
                          <desc/>
                          <defs/>
                          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                          <g fillRule="nonzero" id="switch">
                          <path d="M31.5,62.6 L85.5,62.6 C102.6,62.6 116.6,48.7 116.6,31.5 C116.6,14.3 102.7,0.4 85.5,0.4 L31.5,0.4 C14.4,0.4 0.4,14.3 0.4,31.5 C0.4,48.7 14.4,62.6 31.5,62.6 Z M31.5,8.6 L85.5,8.6 C98.1,8.6 108.4,18.9 108.4,31.5 C108.4,44.1 98.1,54.4 85.5,54.4 L31.5,54.4 C18.9,54.4 8.6,44.1 8.6,31.5 C8.6,18.9 18.9,8.6 31.5,8.6 Z" fill="#4A4A4A" id="Shape"/>
                          <path d="M31.5,48.8 C41,48.8 48.8,41 48.8,31.5 C48.8,22 41,14.2 31.5,14.2 C22,14.2 14.2,22 14.2,31.5 C14.2,41 22,48.8 31.5,48.8 Z M31.5,22.4 C36.5,22.4 40.6,26.5 40.6,31.5 C40.6,36.5 36.5,40.6 31.5,40.6 C26.5,40.6 22.4,36.5 22.4,31.5 C22.4,26.5 26.5,22.4 31.5,22.4 Z" fill="#17AB13" id="Shape"/>
                          </g>
                          </g>
                          </svg>
                        }
                    </div>
        </div>
          </div>
        </div>
      <div className='border-t-2 border-sky-500 grid grid-cols-4 gap-4 p-3'>
        
        <div className={` ${cedula ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>Fotocopia Cedula</p>
        </div>
        <div className={` ${solicitud ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>solicitud de credito</p>
        </div>
        <div className={` ${certificado ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>certificado laboral</p>
        </div>
        <div className={` ${ingresoyretencion ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>certificado de ingreso y retencion</p>
        </div>
        <div className={` ${extratos ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>extratos bancarios</p>
        </div>
        <div className={` ${declaracion ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>declaracion de renta</p>
        </div>
        <div className={` ${cartascomerciales ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>cartas comerciales</p>
        </div>
        <div className={` ${proveedor ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>factura de proveedores</p>
        </div>
        <div className={` ${carta ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>Carta cupos</p>
        </div>
        <div className={` ${camara ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>Camara y comercio</p>
        </div>
        <div className={` ${rut ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>rut</p>
        </div>
        <div className={` ${carta ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>Carta cupos</p>
        </div>
        <div className={` ${pension ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>Resolucion de la pension</p>
        </div>
        <div className={` ${desprendibles ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>Desprendibles de ultimos tres pagos</p>
        </div>
        <div className={` ${certificado ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>Certificados de tradiccion</p>
        </div>
        <div className={` ${arrendamientos ? "" : "hidden"} p-2 bg-sky-500  text-center text-white font-bold rounded-sm`}>
          <p>contratos de arrendamiento</p>
        </div>
      </div>
      <div className='grid place-items-center mt-6'>
           <button className='text-xl p-2 rounded-xl bg-sky-800 hover:bg-sky-500 w-1/3 font-bold text-white'
           onClick={()=> handleclicdocumentacion()} 
           >Guardar</button>
        </div>
    </div>
    
    </>
  )
}
