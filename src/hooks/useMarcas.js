import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'

export const useMarcas = () =>{
    const token = localStorage.getItem('TOKEN_USER')
    // creacion de marcas
    const marcasinsert = async (data) => {
        try {
          const respuesta = await clienteAxios.post('/api/marca', data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          await marcasmutate()
          // console.log(respuesta)
        } catch (error) {
          // console.log(error)
        }
      }
//    consulta de marcas
    const { data:marcas, error, isLoading, mutate: marcasmutate } = useSWR('/api/index', () =>
    clienteAxios('/api/index', {
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
        marcas,
        isLoading,
        marcasinsert
    }
}
