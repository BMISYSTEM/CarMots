import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../config/axios'

export const  useUsuarios = () => {
    const token = localStorage.getItem('TOKEN_USER')

    // ceacion de usuario nuevo
    const create = async (datos,setErrores,setCreado) =>
    {
        try {
            const {data} = await clienteAxios.post('/api/create/',datos,{
                headers: {
                    'Content-Type':'multipart/form-data',
                  Authorization: `Bearer ${token}`
                }
              })
              setCreado(data)
              setErrores([])
              await usuariosmutate()
              await usuariosmutatepermisos()
            } catch (error) {
            // console.log(error)
            setErrores(error)
            // console.log(Object.values(error.response.data.errors))
        }
    }

    //actualizacion de permisos
    const UpdatePermisos = async(data) => {
      try {
        const respuesta = await clienteAxios.post('/api/usuarios/update_permisos',data,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    //bloqueo
    const Bloqueo = async(data) => {
      try {
        const respuesta = await clienteAxios.post('/api/usuarios/bloqueo',data,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        await usuariosmutatepermisos()
      } catch (error) {
        console.log(error)
      }
    }
    //activacionn
    const Activacion = async(data) => {
      try {
        const respuesta = await clienteAxios.post('/api/usuarios/ativacion',data,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        await usuariosmutatepermisos()
      } catch (error) {
        console.log(error)
      }
    }

    //CONSULTA DE USUSARIOS 
    const {data: usuarios, error: errorusuarios, isLoading: usuariosloading, mutate: usuariosmutate } = useSWR('/api/usuarios',()=>
    clienteAxios('/api/usuarios',
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    )
    // CONSULTA DE PERMISO DE LOS USUARIOS para la pantalla de lista de usuarios
    const {data: usuariospermisos, error: errorusuariospermisos, isLoading: usuariosloadingpermisos, mutate: usuariosmutatepermisos } = useSWR('/api/usuarios/permisos',()=>
    clienteAxios('/api/usuarios/permisos',
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  )


  return {
    create,
    usuariospermisos,
    errorusuariospermisos,
    usuariosloadingpermisos,
    usuarios,
    errorusuarios,
    usuariosloading,
    usuariosloadingpermisos,
    UpdatePermisos,
    Activacion,
    Bloqueo

  }
}
