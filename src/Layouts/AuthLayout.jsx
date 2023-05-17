import {Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


export default function AuthLayout() {
  return (
    <>
      <main className=' grid place-items-center bg-slate-100 h-screen'>
        {/* se impime lo que le pase como elemnt children en el router */}
        <Outlet />
      </main>
      <ToastContainer />
    </>
  )
}
