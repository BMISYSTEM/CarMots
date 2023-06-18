import React, { useRef } from 'react'
import { useState } from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { toast } from 'react-toastify'

export default function Matricula() {
  const {handleclickmatriculas} = useBpsystem()
  const [traspaso,settraspasos] = useState()
  const [honorarios,sethonorarios] = useState()
  const [impuestos,setimpuestos] = useState()
  const [pignoracion,setpignoracion] = useState()
  const [certradiccion,setcertradiccion] = useState()
  const [cijing,setcijin] = useState()
  const tras = useRef()
  const hono = useRef()
  const impu = useRef()
  const pign = useRef()
  const cert = useRef()
  const ciji = useRef()

  const handleclickmatricula = () =>{

    const data = {
      traspaso:traspaso ? 'Incluido' : tras.current.value,
      honorarios:honorarios ? 'Incluido' : hono.current.value,
      impuestos:impuestos ? 'Incluido' : impu.current.value,
      pignoracion:pignoracion ? 'Incluido' : pign.current.value,
      certradiccion:certradiccion ? 'Incluido' : cert.current.value,
      cijing:cijing ? 'Incluido' : ciji.current.value,
    }

    handleclickmatriculas(data)
    toast.success('informacion de matricula guardada')


  }

  return (
    <>
     <div className='mt-3 border-2 p-3 rounded-xl'>
      
     <div className='grid grid-cols-4'>

      <div>
        <label htmlFor="">Incluye Traspaso</label>
        <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> settraspasos(!traspaso)}>
          {traspaso ?
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
        <label htmlFor="">Incluye Honorarios</label>
        <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> sethonorarios(!honorarios)}>
          {honorarios ?
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
        <label htmlFor="">Incluye Impuestos</label>
        <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setimpuestos(!impuestos)}>
          {impuestos ?
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
        <label htmlFor="">Incluye Pignoracion</label>
        <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setpignoracion(!pignoracion)}>
          {pignoracion ?
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
        <label htmlFor="">Incluye cer. de tradiccion</label>
        <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setcertradiccion(!certradiccion)}>
          {certradiccion ?
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
        <label htmlFor="">Incluye Cigin/Peritaje</label>
        <div className='w-10 h-10 cursor-pointer hover:text-green-500' onClick={()=> setcijin(!cijing)}>
          {cijing ?
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
   
      <div className='flex flex-col gap-2 w-full mt-3 items-center'>
        <div className={`${traspaso ? "hidden" : "text-center flex flex-col" }`}>
          <label htmlFor="">Traspaso</label>
          <input type="number" className='rounded-xl p-1 border-2'
          ref={tras} />
        </div>
        <div className={`${honorarios ? "hidden" : "text-center flex flex-col" }`}>
        <label htmlFor="">Honorarios</label>
        <input type="number" className='rounded-xl p-1 border-2'
        ref={hono} />
        </div>
        <div className={`${impuestos ? "hidden" : "text-center flex flex-col" }`}>
        <label htmlFor="">Impuestos</label>
        <input type="number" className='rounded-xl p-1 border-2' 
        ref={impu}/>
        </div>
        <div className={`${pignoracion ? "hidden" : "text-center flex flex-col" }`}>
        <label htmlFor="">Pignoracion</label>
        <input type="number" className='rounded-xl p-1 border-2' 
        ref={pign}/>
        </div>
        <div className={`${certradiccion ? "hidden" : "text-center flex flex-col" }`}>
        <label htmlFor="">Certificado de tradiccion</label>
        <input type="number" className='rounded-xl p-1 border-2'
        ref={cert} />
        </div>
        <div className={`${cijing ? "hidden" : "text-center flex flex-col" }`}>
        <label htmlFor="">Sigin/Peritaje</label>
        <input type="number" className='rounded-xl p-1 border-2' 
        ref={ciji}/>
        </div>
      </div>
       <div className='grid place-items-center mt-6'>
           <button className='text-xl p-2 rounded-xl bg-sky-800 hover:bg-sky-500 w-1/3 font-bold text-white'
           onClick={()=>handleclickmatricula()}>Guardar</button>
        </div>
    
    </div>
    </>
  )
}
