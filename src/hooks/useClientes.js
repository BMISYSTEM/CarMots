import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'
import { useState } from 'react'

export const useClientes = () => {
  const [errores,setErrores] = useState()
    const token = localStorage.getItem('TOKEN_USER')
    const createclientes = async(data,setclientecreado) => {
        try {
          const respuesta = await clienteAxios.post('/api/clientes',data,{
            headers:{
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            }
          }).then(respuesta=> setclientecreado(respuesta.data[0]))
          await clientesmutate()
          // console.log(respuesta)
        } catch (error) {
          setErrores(error.response.data.errors)
        }
      }
    //actualizacion de estados
    const updateEstado = async(data) => {
        try {
          const respuesta = await clienteAxios.post('/api/clientes/estados',data,{
            headers:{
              Authorization: `Bearer ${token}`
            }
          })
          await clientesmutate()
          // console.log(respuesta)
        } catch (error) {
          setErrores(error.response.data.errors)
        }
      }
      //descraga de documentos 

      const documentosDescarga = async (data) => 
      {
        try {
          const respuesta = await clienteAxios.post('/api/clientes/documentos',data,{
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
      const {data: clientesall, error: errorclientes, isLoading: clientesloading, mutate: clientesmutate } = useSWR('/api/clientes',()=>
        clienteAxios('/api/clientes',
        {
          headers:{
            Authorization:`Bearer ${token}`,
            
          }
        })
        )
    const consulta = async (telefono,email,setcliente)=>
    {
      try {
        const respuesta = await clienteAxios('/api/clientes/busqueda?telefono='+telefono+'&email='+email,
        {
          headers:{
          Authorization:`Bearer ${token}`,
          }
        }).then(respuesta=> setcliente(respuesta.data[0]))
        
      } catch (error) {
        setErrores(error)
      }

    }
 return {
    clientesall,
    clientesloading,
    createclientes,
    errores,
    setErrores,
    documentosDescarga,
    updateEstado,
    consulta,
 }
}
