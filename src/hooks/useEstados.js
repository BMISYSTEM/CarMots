import React from 'react'
import useSWR from 'swr'
import clienteAxios from '../config/axios'

export const useEstados = () => {
    const token = localStorage.getItem('TOKEN_USER')
  const createEstados = async (data) => {
    try {
      const respuesta = await clienteAxios.post('/api/estados', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // console.log(respuesta)
      await estadosmutate()
    } catch (error) {
      // setEstados(error)
    }
  }


  const { data: estadosall, error: errorEstados, isLoading: estadosloading, mutate: estadosmutate } = useSWR('/api/estados', () =>
    clienteAxios('/api/estados', {
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
    estadosall,
    createEstados,
    errorEstados,
    estadosloading
  }
  
}
