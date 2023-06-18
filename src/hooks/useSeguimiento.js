import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'
import { useState } from 'react'

export const useSeguimiento = () => {
  const [errores,setErrores] = useState()
    const token = localStorage.getItem('TOKEN_USER')

      //va a consultar el listado de clientes y el estado actual para hacer seguimiento 
      const {data: seguiminentoall, error: errorseguimiento, isLoading: seguiminetoloading, mutate: seguimientomutate } = useSWR('/api/clientes/seguimiento',()=>
        clienteAxios('/api/clientes/seguimiento',
        {
          headers:{
            Authorization:`Bearer ${token}`,
            
          }
        })
        )
    
 return {
    seguiminentoall,
    errorseguimiento,
    seguiminetoloading,
    seguimientomutate
 }
}
