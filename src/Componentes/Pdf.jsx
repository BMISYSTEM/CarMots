import React from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import DocumentopdfCotizacion from './DocumentopdfCotizacion'
import { usePdf } from '../hooks/usePdf'
import Loading from './Loading'
import { toast } from 'react-toastify'
import { useSeguimiento } from '../hooks/useSeguimiento'

export default function Pdf() {
  const url = import.meta.env.VITE_API_URL
  const {modonoche,vehiculoseleccionado,clienteseleccionseguimiento} = useBpsystem()
  const {seguiminentoall,seguiminetoloading} = useSeguimiento()
  const {pdfs,pdfloading,asesorios,asesoriosloading,pdfdescarga} = usePdf(clienteseleccionseguimiento)
  if (pdfloading || asesoriosloading || seguiminetoloading)
  {
      return (
          <Loading/>
      )
  }
  const tel= seguiminentoall.data.filter(cliente => cliente.cliente_id === clienteseleccionseguimiento)
  console.log(tel[0].telefono)
  const eviaralaravel = (url) => {
    console.log(url)
  }
  const image = vehiculoseleccionado.foto1
  const handleclickpdf = (doc) => 
  {
    const docs= url+'/storage/documentos/'+doc

    window.open(docs,'pdf')
      
  }
  const sendwpp =(doc) => {
    const telefono = tel[0].telefono
    const docs= url+'/storage/documentos/'+doc
    window.open('https://api.whatsapp.com/send?phone='+telefono+'&text=Buen%20Dia%2C%20adjunto%20link%20de%20descarga%20de%20la%20cotizacion%20solicitada%20el%20dia%20de%20hoy%20'+docs)
  }
  return (
    <>
    <div className='w-auto h-full  flex flex-col p-3 overflow-hidden'>
        {/* filtros */}
        <div className='w-full rounded-xl border-2 h-1/6  p-3 items-center flex flex-row gap-4 '>
            <div className='relative flex item-center text-gray-400 focus-within:text-gray-800 border-b-2 border-slate-200'>
                {/* imagen */}
                <div className='absolute w-5 h-5 ml-3 pointer-events-none p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <input 
                    type="text"
                    name='shear'
                    placeholder='Nombre,cedula'
                    className='w-full pr-3 pl-16 rounded-xl h-full p-3 focus:border-sky-400 bg-transparent'
                    // onChange={(e)=>setbusqueda(e.target.value)}
                 />
            </div>
                
        </div>
        <div>
        <table className='p-3 w-full overflow-auto'>
              <thead>
                <tr className='w-full  border-b-2 border-slate-200 text-center text-xl'>
                  <td >id</td>
                  <td>Documento</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody >
              {pdfs?.map(pdf=>
                  <tr className='w-full  border-b-2 border-slate-200 text-center text-xl'>
                  <td >{pdf.id}</td>
                  <td>{pdf.Pdf}</td>
                    <td>
                      
                        <button className='p-1 bg-red-800 rounded-full text-white m-1'
                        onClick={()=>handleclickpdf(pdf.Pdf)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                        </button>
                      
                      <button className='p-1 bg-green-800 hover:bg-green-500 rounded-full text-white m-1'
                      onClick={()=>sendwpp(pdf.Pdf)}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                      </svg>

                        </button>
                    </td>
                  </tr>
                  )}
              
              </tbody>
            </table>
        </div>
        {/* listado */}
        {/* <div className='overflow-auto'>
          <PDFViewer className='w-full h-screen'>
            <DocumentopdfCotizacion  />
          </PDFViewer>
        </div> */}
    </div>
</>
  )
}
