import {useContext,memo} from 'react'
import BpsystemProvider from '../context/BpsystemProvider'
//globalizamos el archivo que contendra la logica del sistema front
const useBpsystem = () =>
{
    return useContext(BpsystemProvider)
}
//hacemos disponible la funcion que contiene el usecontyext eso da acceso a todo
export default useBpsystem