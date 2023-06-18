import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../conffig/axios'
import { useState } from 'react'

export const useNota =() => {
    const token = localStorage.getItem('TOKEN_USER')
    
    const createNota = async (datos,seterror) => {
        try {
          const respuesta = await clienteAxios.post('api/seguimiento/nota', datos,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
              }
            }
            )
        
          await notamutate()
        } catch (error) { 

          seterror(error)
        }
      }
      const { data: notaall, error: notaerror, isLoading: notaloading, mutate: notamutate } = useSWR('api/seguimiento/nota', () =>
        clienteAxios('api/seguimiento/nota', {
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
    notaall,
    notaerror,
    notaloading,
    createNota,
    
  }
}
