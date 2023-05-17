import { useEffect,useState } from "react";
import useSWR from 'swr'
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";
import useBpsystem from "./useBpsystem";


export const useAuth = ({middleware,url}) =>
{

    //informacion del token 
    // const [usuario,setUsuario] = useState()
    const token = localStorage.getItem('TOKEN_USER');
    const navigate = useNavigate();
    const datapermisos = [];
    

    //revalidar la informacion del usuario logeado
    const {data:user,error,mutate,isLoading} = useSWR('/api/user',() => 
        clienteAxios('/api/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    );

    //login inicio de sessioon
    const login = async (datos,setErrores,setpermisos) =>
    {
        try {
            const {data} = await clienteAxios.post('api/login/',datos)
            
            await per(data)
            await permisosuser(setpermisos)
            // await permisosuser(setPermisos)
            await mutate()
            
            // return data.permisos[0]
            
        } catch (error) {
            // console.log(error)
            setErrores(error)
        }
        
    }
    const  per = async (data) =>{
      localStorage.setItem('TOKEN_USER',data.token)
      localStorage.setItem('imgperfil',data.imagen)
    }
    const permisosuser = async(setpermisos) => {
        console.log("desde permisos"+ token)
        
            try {
    
                const p = await clienteAxios('/api/permisos/',{
                  headers:{
                    Authorization: `Bearer ${token}`
                  }
                })
                
                setpermisos(p.data[0])
                // console.log(p.data[0])
                
              } catch (error) {
                console.log(error)
              }
        }
          
      
    const logaut = async() => {
        try {
           const {data} = await clienteAxios.post('/api/logout', null,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(data)
            localStorage.removeItem('TOKEN_USER')
            await mutate(undefined)
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
        
    }
    //crear usuarios nuevos
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
        } catch (error) {
            // console.log(error)
            setErrores(error)
            // console.log(Object.values(error.response.data.errors))
        }
    }
    useEffect(()=>{
        if(middleware === 'guest' && url && user )
        {
            navigate(url);
        }
        //si el usuario no esta autenticado lo manda a iniciar session 
        if(middleware === 'auth' && error)
        {
            navigate('/')
        }
    },[user,error])
    const errores = error
    return {
        login,
        user,
        create,
        isLoading,
        errores,
        logaut,datapermisos
        ,permisosuser
    }

}