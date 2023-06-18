import React from 'react'
import  useSWR from 'swr'
import clienteAxios from '../config/axios'

export  const useModelos = () =>{
    const token = localStorage.getItem('TOKEN_USER')
    const createmodelos = async (datos) => {
        try {
          const respuesta = await clienteAxios.post('/api/modelo', datos, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          await mutateModelos()
          // console.log(respuesta)
        } catch (error) {
          // setModeloserror(error)
        }
      }
      
      
      const { data: modelosdata, error: errorModel, isLoading: loadingModelos, mutate: mutateModelos } =useSWR('/api/modelo', () =>
        clienteAxios('/api/modelo', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.data)
          .catch(error => {
            throw Error(error?.response?.data?.errors)
          })
      )
      
  return {
    modelosdata,
    loadingModelos,
    createmodelos,
    errorModel 
  }
}
