import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../conffig/axios'

export const useVehiculos =() => {
    const token = localStorage.getItem('TOKEN_USER')
    const createVehiculos = async (datos) => {
        try {
          const respuesta = await clienteAxios.post('/api/vehiculos', datos,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
              }
            }
            )
        
          await vehiculosmute()
        } catch (error) {    
        }
      }
      const { data: vehiculosall, error: errorvehiculos, isLoading: vehiculosloading, mutate: vehiculosmute } = useSWR('/api/vehiculos', () =>
        clienteAxios('/api/vehiculos', {
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
    vehiculosall,
    vehiculosloading,
    createVehiculos
  }
}
