import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../conffig/axios'
import { useState } from 'react'

export const useAsesorios =() => {
    const [errores,seterrores] = useState()
    const token = localStorage.getItem('TOKEN_USER')
    const createasesorios = async (datos) => {
        try {
          const respuesta = await clienteAxios.post('/api/asesorios', datos,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
              }
            }
            )
        
          await asesoriosmutate()
        } catch (error) {   
          seterrores(error) 
        }
      }
      const { data: asesoriosall, error: asesorioserror, isLoading: asesoriosloading, mutate: asesoriosmutate } = useSWR('/api/asesorios', () =>
        clienteAxios('/api/asesorios', {
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


  return {
    asesoriosall,
    asesoriosloading,
    createasesorios,
    errores
    
  }
}
