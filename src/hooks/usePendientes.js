import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'
import { useState } from 'react'

export const usePendientes = () => {
  const [errores,setErrores] = useState()
    const token = localStorage.getItem('TOKEN_USER')
 
    //actualizacion de estados

      const {data: allpendientes, error: errorpendientes, isLoading: loadingpendientes, mutate: pendientesmutate } = useSWR('/api/clientes/pendientes',()=>
        clienteAxios('/api/clientes/pendientes',
        {
          headers:{
            Authorization:`Bearer ${token}`,
            
          }
        })
        )
    
 return {
    allpendientes,
    errorpendientes,
    loadingpendientes,
    pendientesmutate
 }
}
