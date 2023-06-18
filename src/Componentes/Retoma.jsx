import React, { useRef } from 'react'
import { useState } from 'react'
import useBpsystem from '../hooks/useBpsystem'
import { toast } from 'react-toastify'
import ReactPDF, { BlobProvider, Document, PDFDownloadLink, Page, Text, pdf, usePDF } from '@react-pdf/renderer'
import { usePdf } from '../hooks/usePdf'
import DocumentopdfCotizacion from './DocumentopdfCotizacion'
import Pdf from './Pdf'

export default function Retoma() {
  const {handleclickretoma,
        retomas,
        matricula,
        financiero,
        documentacion,clienteseleccionseguimiento} = useBpsystem()
  const {createpdf} = usePdf(clienteseleccionseguimiento)
  const [retoma,setretoma] = useState(0)

  const placa = useRef('')
  const marca = useRef('')
  const referencia = useRef('')
  const modelo = useRef('')
  const kilometraje = useRef('')
  const valor = useRef('')
  const descripcion = useRef('')
  const fecha = new Date()
  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const yyy = fecha.getFullYear();
  let data = {}
  const handleclicretoma = () => 
  {
    
    if(!(retoma)){
      data = {
        placa:'-',
        marca:'-',
        referencia:'-',
        modelo:'-',
        kilometraje:'-',
        valor:'-',
        descripcion:'-',
      }
    }else{
      data = {
        placa:placa.current.value,
        marca:marca.current.value,
        referencia:referencia.current.value,
        modelo:modelo.current.value,
        kilometraje:kilometraje.current.value,
        valor:valor.current.value,
        descripcion:descripcion.current.value,
      }
    }
    handleclickretoma(data)
    const datapdf = {
      cliente:clienteseleccionseguimiento,
      pdf:('pdf-'+dia+'-'+mes+'-'+yyy+'-' + 'cliente'),
      retoma_placa:retomas.placa,
      retoma_descripcion:retomas.descripcion,
      retoma_kilometraje:retomas.kilometraje,
      retoma_marca:retomas.marca,
      retoma_modelo:retomas.modelo,
      retoma_referencia:retomas.referencia,
      retoma_valor:retomas.valor,
      matricula_certificado_tradiccion:matricula.certradiccion,
      matricula_cijin:matricula.cijing,
      matricula_honorario:matricula.honorarios,
      matricula_impuestos:matricula.impuestos,
      matricula_pignoracion:matricula.pignoracion,
      matricula_traspaso:matricula.traspaso,
      documentacion_cedula:documentacion.cedula,
      documentacion_arrendamientos:documentacion.arrendamientos,
      documentacion_camaradecomercio:documentacion.camara,
      documentacion_carta:documentacion.carta,
      documentacion_cartascomerciales:documentacion.cartascomerciales,
      documentacion_certificado:documentacion.certificado,
      documentacion_comerciales:documentacion.comerciales,
      documentacion_declaracion:documentacion.declaracion,
      documentacion_desprendibles:documentacion.desprendibles,
      documentacion_extratos:documentacion.extratos,
      documentacion_ingresoyretencion:documentacion.ingresoyretencion,
      documentacion_laboral:documentacion.laboral,
      documentacion_pension:documentacion.pension,
      documentacion_proveedor:documentacion.proveedor,
      documentacion_rut:documentacion.rut,
      documentacion_solicitud:documentacion.solicitud,
      financiero_couta_extra:financiero.couta_extra,
      financiero_asesorios:financiero.asesorios,
      financiero_cuarentayochomeses:financiero.cuarentayochomeses,
      financiero_mesesmanuales:financiero.mesesmanuales,
      financiero_numerodemeses_manual:financiero.numerodemeses_manual,
      financiero_ochentameses:financiero.ochentameses,
      financiero_sesentameses:financiero.sesentameses,
      financiero_setentaydosmeses:financiero.setentaydosmeses,
      financiero_tasa_interes:financiero.tasa_interes,
      financiero_valor_financiamiento:financiero.valor_financiamiento,
      financiero_valor_financiamiento:financiero.valor_financiamiento,
      financiero_vehiculo_id:financiero.vehiculo_id,
      financiero_vehiculo_id:financiero.vehiculo_id,
      financiero_vehiculo_marca_id:financiero.vehiculo_marca_id,
      financiero_vehiculo_marca_nombre:financiero.vehiculo_marca_nombre,
      financiero_vehiculo_modelo_id:financiero.vehiculo_modelo_id,
      financiero_vehiculo_modelo_nombre:financiero.vehiculo_modelo_nombre,
      financiero_vehiculo_valor:financiero.vehiculo_valor,
      financiero_vehiculo_placa:financiero.vehiculo_placa,
      financiero_vehiculo_kilometraje:financiero.vehiculo_kilometraje,
      financiero_vehiculo_foto:financiero.vehiculo_foto,
      
    }
    createpdf(datapdf)
    toast.success('retoma guardada')
  }
  return (
    <>
    <div>
      <div>
      <label htmlFor="">Incluir Retoma</label>
        <div className='w-10 h-10 cursor-pointer hover:text-green-500 ' onClick={()=> setretoma(!retoma)}>
          {retoma ?
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
    
    <div className={`${retoma ? "flex flex-row gap-2 mt-3 w-full  justify-center" : "hidden"}`}>
      <div className='flex flex-col gap-2 w-1/2 text-center '>
      <label htmlFor="">Placa</label>
      <input type="number" className='rounded-xl p-1 border-2'
      ref={placa} />
      <label htmlFor="">Marca</label>                  
      <input type="number" className='rounded-xl p-1 border-2 '
      ref={marca} />
      <label htmlFor="">Ref Vehiculo</label>
      <input type="number" className='rounded-xl p-1 border-2 ' 
      ref={referencia}/>
      <label htmlFor="">Modelo</label>
      <input type="number" className='rounded-xl p-1 border-2 ' 
      ref={modelo}/>
      <label htmlFor="">Kilometraje</label>
      <input type="number" className='rounded-xl p-1 border-2 '
      ref={kilometraje} />
      <label htmlFor="">Valor comercial</label>
      <input type="number" className='rounded-xl p-1 border-2 ' 
      ref={valor}/>
      <label htmlFor="">Descripcion</label>
      <textarea name="" id="" cols="30" rows="1" className='rounded-xl p-1 border-2 '
      ref={descripcion}></textarea>
      </div>
    </div>
    
        <div className='grid place-items-center mt-6'>
           <button className='text-xl p-2 rounded-xl bg-sky-800 hover:bg-sky-500 w-1/3 font-bold text-white'
           onClick={()=>handleclicretoma()}
           >Guardar y Generar PDF</button>
        </div>
    </div>
    
    </>
  )
}
