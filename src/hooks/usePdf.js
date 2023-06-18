import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../conffig/axios'
import { useState } from 'react'

export const usePdf =(id) => {
    const token = localStorage.getItem('TOKEN_USER')
    const createpdf = async (datos,seterror) => {
        try {
          const respuesta = await clienteAxios.post('api/setpedf', datos,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
              }
            }
            )
          await pedfmutate()
          await asesoriosmutate()
          
        } catch (error) { 
          seterror(error)
        }
      }
      const { data: pdfs, error: pdferror, isLoading: pdfloading, mutate: pedfmutate } = useSWR('api/setpedf?id='+id, () =>
        clienteAxios('api/setpedf?id='+id, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => res.data)
          .catch(
            error => {
              throw Error(error?.response?.data?.errors)
            }
          )
      )
      const { data: asesorios, error: asesorioerror, isLoading: asesoriosloading, mutate: asesoriosmutate } = useSWR('api/setpedf/asesorio?id='+id, () =>
        clienteAxios('api/setpedf/asesorio?id='+id, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => res.data)
          .catch(
            error => {
              throw Error(error?.response?.data?.errors)
            }
          )
      )
      const pdfdescarga = async (data) => 
      {
        try {
          const respuesta = await clienteAxios.post('/api/pdf/descarga',data,{
            headers:{
              Authorization:`Bearer ${token}`,
              responseType:'blob'
            }
          }).then(response =>{
            
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href=url
            link.setAttribute('download',data.documento)
            document.body.appendChild(link)
            link.click()
          }
          )
          
        } catch (error) {
          console.log(error)
        }
      }
  return {
    createpdf,
    pdfs,
    pdferror,
    pdfloading,
    asesorios,
    asesoriosloading,
    pdfdescarga
  }
}
