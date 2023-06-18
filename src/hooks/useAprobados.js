import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'
import { useState } from 'react'

export const useAprobados = () => {
  const [errores,setErrores] = useState()
    const token = localStorage.getItem('TOKEN_USER')
 
    //actualizacion de estados

      const {data: allaprobados, error: erroraprobados, isLoading: loadingaprobados, mutate: aprobadosmutate } = useSWR('/api/clientes/aprobados',()=>
        clienteAxios('/api/clientes/aprobados',
        {
          headers:{
            Authorization:`Bearer ${token}`,
          }
        })
        )
    
 return {
    allaprobados,
    erroraprobados,
    loadingaprobados,
    aprobadosmutate
 }
}
