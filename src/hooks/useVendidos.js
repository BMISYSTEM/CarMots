import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'
import { useState } from 'react'

export const useVendidos = () => {
  const [errores,setErrores] = useState()
    const token = localStorage.getItem('TOKEN_USER')
 
    //actualizacion de estados

      const {data: allvendidos, error: errorvendidos, isLoading: loadingvendidos, mutate: vendidosmutate } = useSWR('/api/clientes/vendidos',()=>
        clienteAxios('/api/clientes/vendidos',
        {
          headers:{
            Authorization:`Bearer ${token}`,
            
          }
        })
        )
    
 return {
    allvendidos,
    loadingvendidos,
    vendidosmutate,
    errorvendidos
 }
}
