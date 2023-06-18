import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../conffig/axios'

export const useResultado =() => {
    const token = localStorage.getItem('TOKEN_USER')
    const createResultado = async (datos) => {
        try {
          const respuesta = await clienteAxios.post('api/resultado', datos,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
              }
            }
            )
        
          await resultadomutate()
        } catch (error) {    
        }
      }
      const { data: resultadoall, error: resultadoerror, isLoading: resultadoloading, mutate: resultadomutate } = useSWR('api/resultado', () =>
        clienteAxios('api/resultado', {
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
    createResultado,
    resultadoall,
    resultadoerror,
    resultadoloading
  }
}
