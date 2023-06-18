import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'
import { useState } from 'react'

export const useNotificaciones = () => {
  const [errores,setErrores] = useState()
    const token = localStorage.getItem('TOKEN_USER')
 
    //actualizacion de estados

      const {data: allnotificaciones, error: errornotificaciones, isLoading: loadingnotificaciones, mutate: notificacionesmutate } = useSWR('/api/clientes/notificaciones',()=>
        clienteAxios('/api/clientes/notificaciones',
        {
          headers:{
            Authorization:`Bearer ${token}`,
            
          }
        })
        )
    
 return {
    allnotificaciones,
    errornotificaciones,
    loadingnotificaciones
 }
}
