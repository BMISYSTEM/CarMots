import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import { Link as Navegacion}  from 'react-scroll'

export default function Cartmots() {
  
  const handlesubmit = (e) =>{
    e.preventDefault()
  }
  
  return (
    <>
    <header className='w-full h-auto  flex flex-row  justify-between md:p-5    items-center fixed z-50'>
        
        <div className='text-white w-10 h-10 z-10 fixed'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             width="200" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="150" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="9515f3a5b7"><path d="M 59 169 L 109 169 L 109 206.9375 L 59 206.9375 Z M 59 169 " clip-rule="nonzero"/></clipPath><clipPath id="c2a5c6609d"><path d="M 31.933594 162 L 85 162 L 85 203 L 31.933594 203 Z M 31.933594 162 " clip-rule="nonzero"/></clipPath><clipPath id="14dc80c4b0"><path d="M 59 115.4375 L 109 115.4375 L 109 153 L 59 153 Z M 59 115.4375 " clip-rule="nonzero"/></clipPath><clipPath id="9ac243269a"><path d="M 82 120 L 135.433594 120 L 135.433594 160 L 82 160 Z M 82 120 " clip-rule="nonzero"/></clipPath></defs><path fill="#7f248d" d="M 105.535156 149.09375 C 103.390625 149.289062 101.367188 149.863281 99.523438 150.734375 C 106.941406 150.90625 113.761719 155.734375 116.125 163.214844 C 119.679688 174.46875 109.171875 191.410156 111.015625 205.234375 C 112.070312 192.277344 124.191406 178.960938 124.964844 167.691406 C 125.769531 168.214844 126.75 168.480469 127.78125 168.386719 C 130.230469 168.160156 132.03125 165.988281 131.804688 163.535156 C 131.578125 161.082031 129.414062 159.277344 126.964844 159.503906 C 125.78125 159.613281 124.75 160.179688 124.023438 161.007812 C 121.390625 153.429688 113.871094 148.324219 105.535156 149.09375 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#9515f3a5b7)"><path fill="#1082ce" d="M 105.0625 174.097656 C 103.816406 172.335938 102.3125 170.863281 100.636719 169.703125 C 104.199219 176.226562 103.4375 184.554688 98.148438 190.347656 C 90.199219 199.058594 70.296875 198.414062 59.269531 206.925781 C 71 201.359375 88.570312 205.21875 98.699219 200.253906 C 98.652344 201.214844 98.910156 202.195312 99.507812 203.042969 C 100.925781 205.054688 103.703125 205.53125 105.710938 204.109375 C 107.722656 202.6875 108.199219 199.90625 106.777344 197.894531 C 106.089844 196.921875 105.085938 196.3125 104.007812 196.097656 C 109.242188 190.023438 109.894531 180.945312 105.0625 174.097656 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#c2a5c6609d)"><path fill="#40b93c" d="M 83.210938 186.191406 C 84.113281 184.230469 84.632812 182.1875 84.796875 180.152344 C 80.9375 186.503906 73.355469 190.007812 65.707031 188.316406 C 54.199219 185.773438 44.808594 168.1875 31.933594 162.875 C 42.613281 170.269531 48.0625 187.445312 57.417969 193.746094 C 56.5625 194.1875 55.84375 194.902344 55.410156 195.84375 C 54.382812 198.082031 55.355469 200.730469 57.589844 201.761719 C 59.824219 202.792969 62.46875 201.8125 63.496094 199.574219 C 63.996094 198.496094 64.019531 197.320312 63.664062 196.273438 C 71.535156 197.78125 79.707031 193.808594 83.210938 186.191406 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#fbc108" d="M 61.832031 173.277344 C 63.976562 173.082031 66 172.507812 67.839844 171.636719 C 60.425781 171.464844 53.601562 166.636719 51.238281 159.15625 C 47.683594 147.902344 58.191406 130.960938 56.351562 117.136719 C 55.296875 130.09375 43.171875 143.410156 42.402344 154.679688 C 41.59375 154.15625 40.617188 153.890625 39.585938 153.984375 C 37.136719 154.210938 35.335938 156.382812 35.5625 158.835938 C 35.785156 161.289062 37.953125 163.09375 40.402344 162.867188 C 41.585938 162.757812 42.617188 162.191406 43.339844 161.363281 C 45.972656 168.941406 53.496094 174.046875 61.832031 173.277344 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#14dc80c4b0)"><path fill="#e91348" d="M 62.304688 148.273438 C 63.546875 150.039062 65.050781 151.507812 66.726562 152.667969 C 63.167969 146.144531 63.929688 137.816406 69.21875 132.023438 C 77.167969 123.3125 97.066406 123.957031 108.097656 115.445312 C 96.367188 121.011719 78.792969 117.152344 68.667969 122.117188 C 68.714844 121.15625 68.457031 120.175781 67.859375 119.328125 C 66.441406 117.316406 63.660156 116.839844 61.652344 118.261719 C 59.644531 119.683594 59.167969 122.464844 60.589844 124.476562 C 61.273438 125.449219 62.277344 126.058594 63.359375 126.273438 C 58.125 132.347656 57.46875 141.425781 62.304688 148.273438 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#9ac243269a)"><path fill="#f1471d" d="M 84.15625 136.179688 C 83.253906 138.140625 82.734375 140.183594 82.570312 142.21875 C 86.425781 135.867188 94.007812 132.363281 101.660156 134.054688 C 113.167969 136.597656 122.558594 154.183594 135.429688 159.496094 C 124.753906 152.101562 119.304688 134.925781 109.945312 128.625 C 110.800781 128.183594 111.523438 127.46875 111.957031 126.527344 C 112.984375 124.289062 112.007812 121.640625 109.773438 120.609375 C 107.542969 119.578125 104.898438 120.558594 103.867188 122.796875 C 103.371094 123.875 103.347656 125.050781 103.703125 126.097656 C 95.832031 124.589844 87.65625 128.5625 84.15625 136.179688 " fill-opacity="1" fill-rule="nonzero"/></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(138.230079, 197.710182)"><g><path d="M 11.765625 0.273438 C 15.859375 0.273438 19.441406 -2.0625 21.195312 -5.503906 L 16.652344 -7.808594 C 15.757812 -6.019531 13.96875 -4.886719 11.765625 -4.886719 C 8.636719 -4.886719 6.296875 -7.191406 6.296875 -10.320312 C 6.296875 -13.453125 8.636719 -15.757812 11.765625 -15.757812 C 13.96875 -15.757812 15.757812 -14.621094 16.652344 -12.832031 L 21.195312 -15.140625 C 19.441406 -18.578125 15.859375 -20.917969 11.765625 -20.917969 C 5.882812 -20.917969 1.167969 -16.171875 1.167969 -10.320312 C 1.167969 -4.472656 5.882812 0.273438 11.765625 0.273438 Z M 11.765625 0.273438 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(161.261038, 197.710182)"><g><path d="M 14.554688 0 L 20.195312 0 L 12.730469 -20.644531 L 6.847656 -20.644531 L -0.621094 0 L 5.058594 0 L 6.191406 -3.613281 L 13.417969 -3.613281 Z M 7.535156 -7.878906 L 9.804688 -15.171875 L 12.109375 -7.878906 Z M 7.535156 -7.878906 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(181.884376, 197.710182)"><g><path d="M 13.382812 -8.1875 C 15.757812 -9.015625 17.410156 -11.320312 17.410156 -14.140625 C 17.410156 -17.71875 14.761719 -20.644531 11.078125 -20.644531 L 1.890625 -20.644531 L 1.890625 0 L 7.15625 0 L 7.15625 -7.570312 L 8.359375 -7.570312 L 13.175781 0 L 19.09375 0 Z M 10.21875 -11.800781 L 7.15625 -11.800781 L 7.15625 -16.066406 L 10.21875 -16.066406 C 11.457031 -16.066406 12.351562 -15.171875 12.351562 -13.933594 C 12.351562 -12.695312 11.457031 -11.800781 10.21875 -11.800781 Z M 10.21875 -11.800781 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(201.682253, 197.710182)"><g><path d="M 15.035156 -20.644531 L -0.308594 -20.644531 L -0.308594 -16.066406 L 4.75 -16.066406 L 4.75 0 L 9.976562 0 L 9.976562 -16.066406 L 15.035156 -16.066406 Z M 15.035156 -20.644531 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(217.421575, 197.710182)"><g><path d="M 19.816406 -20.644531 L 13.695312 -7.5 L 7.605469 -20.644531 L 1.890625 -20.644531 L 1.890625 0 L 7.15625 0 L 7.15625 -11.113281 L 12.28125 0 L 15.105469 0 L 20.230469 -11.042969 L 20.230469 0 L 25.496094 0 L 25.496094 -20.644531 Z M 19.816406 -20.644531 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(245.818073, 197.710182)"><g><path d="M 11.765625 0.273438 C 17.617188 0.273438 22.363281 -4.472656 22.363281 -10.320312 C 22.363281 -16.171875 17.617188 -20.917969 11.765625 -20.917969 C 5.882812 -20.917969 1.167969 -16.171875 1.167969 -10.320312 C 1.167969 -4.472656 5.882812 0.273438 11.765625 0.273438 Z M 11.765625 -4.886719 C 8.636719 -4.886719 6.296875 -7.191406 6.296875 -10.320312 C 6.296875 -13.453125 8.636719 -15.757812 11.765625 -15.757812 C 14.863281 -15.757812 17.203125 -13.453125 17.203125 -10.320312 C 17.203125 -7.191406 14.863281 -4.886719 11.765625 -4.886719 Z M 11.765625 -4.886719 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(270.327998, 197.710182)"><g><path d="M 15.035156 -20.644531 L -0.308594 -20.644531 L -0.308594 -16.066406 L 4.75 -16.066406 L 4.75 0 L 9.976562 0 L 9.976562 -16.066406 L 15.035156 -16.066406 Z M 15.035156 -20.644531 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(286.06732, 197.710182)"><g><path d="M 8.636719 0.273438 C 12.59375 0.273438 16 -2.03125 16 -5.988281 C 16 -13.832031 6.640625 -11.871094 6.640625 -15 C 6.640625 -15.894531 7.328125 -16.308594 8.152344 -16.308594 C 9.1875 -16.308594 10.320312 -15.6875 11.421875 -14.519531 L 14.863281 -17.855469 C 13.246094 -19.75 10.804688 -20.917969 8.222656 -20.917969 C 4.953125 -20.917969 1.34375 -19.027344 1.34375 -14.621094 C 1.34375 -7.464844 10.734375 -9.1875 10.734375 -6.054688 C 10.734375 -5.230469 10.046875 -4.644531 8.703125 -4.644531 C 6.914062 -4.644531 5.46875 -5.609375 4.75 -7.15625 L 0.449219 -4.472656 C 1.824219 -1.859375 4.851562 0.273438 8.636719 0.273438 Z M 8.636719 0.273438 "/></g></g></g></svg>
        </div>
        <nav className='md:bg-tranparent md:fixed justify-end md:text-end md:mx-10 md:mt-5 md:w-5/6 z-50
        flex md:flex-row fixed mt-10  items-center content-center'>
            <Navegacion activeClass="active" to="nosotros" spy={true} smooth={true} offset={50} duration={500} className='text-lg  hover:cursor-pointer font-bold p-3 hover:border-b-2 hover:border-amber-500'>
                Nosotros
            </Navegacion>
            <Navegacion activeClass="active" to="productos" spy={true} smooth={true} offset={50} duration={500}  className='text-lg hover:cursor-pointer font-bold p-3 hover:border-b-2 hover:border-amber-500'>
                Productos
            </Navegacion>
            <Navegacion activeClass="active" to="contactenos" spy={true} smooth={true} offset={50} duration={500} className='text-lg  hover:cursor-pointer font-bold p-3 hover:border-b-2 hover:border-amber-500'>
                Contactenos
            </Navegacion>
            <Link to={'/login'} className='text-lg  font-bold p-3 hover:border-b-2 hover:border-amber-500'>
                Login
            </Link>
        </nav>
    </header>
    {/* imagen con logo */}
    <div className='  w-auto h-screen bg-slate-200 bg-[url(/img/fondoprincipal.svg)] bg-cover flex md:flex-row flex-col items-center gap-5 overflow-hidden' >
         <div className=' h-full w-full absolute bg-black/50 blur-xl bg-cover bg-no-repeat bg-center'>

        </div>
        <div className='w-1/2 items-center justify-center text-center content-center h-auto relative flex flex-col gap-4'>
            <h1 className='text-5xl font-bold text-white'>Conoce el mejor CRM vehicular</h1>
            <h2 className='text-lg text-white font-bold '>Contacta a nuestro equipo para brindarte la mejor asesoria</h2>
            <Navegacion 
            activeClass="active" to="contactenos" spy={true} smooth={true} offset={50} duration={500}
            className='text-white hover:cursor-pointer bg-sky-500 p-3 rounded-xl  font-bold hover:translate-y-0  hover:shadow-stone-200 hover:bg-sky-800 translate-y-0.5'>
                Contactame
            </Navegacion>
        </div>
        {/* <div className=' relative flex content-center w-1/2 items-center justify-center'>
            <div className='md:w-96 md:h-96 w-60 h-60 relative bg-amber-500 rounded-full grid place-items-center'>
            <img src="/img/vehiculo4.png" alt="vehiculo camioneta" className='h-2/3 absolute ' />
            </div>
        </div>  */}
       
    </div>
    {/* main */}
    <main className='w-full h-auto '>
        {/* Nosotros */}
        <div className='w-full h-auto flex md:flex-row flex-col gap-4 text-center mt-5 items-center' id='nosotros'>
            {/* tarjetas con informacion */}
            <div className='w-full'>
                <img src="/img/portatil2.png" alt="imagen de portatil con el programa" />
            </div>
            <div className='w-full h-auto flex flex-col gap-5'>
            <h3>Nosotros</h3>
            <p>Somos una empresa enfocada en brindar el mejor producto CRM del mercado, desarrollado por expertos y con el conocimiento 
                de grandes referentes de la industria, nos enfocamos en la automatizacion de tareas repetidas y en el control total de la informacion.
            </p>
            <p>Garantizando la respuestas y gestion en momentos oportunos</p>
            <div className='w-full h-32 grid place-items-center'>
                <img src="/img/telefono2.png" alt="imagen de telefono con el programa"  className=' h-60 w-auto'/>
            </div>
            </div>
        </div>
        {/* Productos */}
        <div id='productos' className='bg-[url(/img/fondo2.png)] w-full h-full bg-cover bg-no-repeat items-center md:bg-auto p-5 flex md:flex-row flex-col gap-5 overflow-hidden justify-center md:pb-60 content-center pt-60'>
            {/* tarjetas */}

            <div className='shadow-xl text-center flex flex-col w-80 h-96 p-2 bg-white rounded-xl border-2 border-slate-300 hover:border-indigo-600 hover:shadow-2xl'>
                {/* imagen */}
                <div className='shadow mb-2'>
                    <img src="/img/dashboard.jpeg" alt="imagen del dashboard" />
                </div>
                {/* descripcion */}
                <div className='items-center h-auto'>
                    <p className='text-xl font-bold text-slate-800'>Dashboar</p>
                    <p className='text-lg text-slate-600'>Permite visualizar la informacion de todo el CRM en tiempo real, sin recargas al instante</p>
                    <button className='mt-5 text-xl font-bold bg-sky-500 hover:bg-sky-800 translate-y-0.5 hover:translate-y-0 text-white rounded-xl shadow-black p-3'>Conocer mas</button>
                </div>
            </div>
            <div className='shadow-xl text-center flex flex-col w-80 h-auto p-2 bg-white rounded-xl border-2 border-slate-300 hover:border-indigo-600 hover:shadow-2xl'>
                {/* imagen */}
                <div className='shadow mb-2'>
                    <img src="/img/Usuariosmodulo.png" alt="imagen del dashboard" />
                </div>
                {/* descripcion */}
                <div className='items-center h-auto'>
                    <p className='text-xl font-bold text-slate-800'>Administrador de usuarios</p>
                    <p className='text-lg text-slate-600'>
                      Cree los usuarios que necesite asignando permisos a los modulos a los cuales tendra acceso</p>
                    <button className='mt-5 text-xl font-bold bg-sky-500 hover:bg-sky-800 translate-y-0.5 hover:translate-y-0 text-white rounded-xl shadow-black p-3'>Conocer mas</button>
                </div>
            </div>
            <div className='shadow-xl text-center flex flex-col w-80 h-auto p-2 bg-white rounded-xl border-2 border-slate-300 hover:border-indigo-600 hover:shadow-2xl'>
                {/* imagen */}
                <div className='shadow mb-2'>
                    <img src="/img/recepcionmodulo.png" alt="imagen del dashboard" />
                </div>
                {/* descripcion */}
                <div className='items-center h-auto'>
                    <p className='text-xl font-bold text-slate-800'>Clientes</p>
                    <p className='text-lg text-slate-600'>
                      Este modulo te permitira ingresar y obtener el estado de tus clientes y consultar el inventario de vehiculos con su respectiva ficha tecnica y valor</p>
                    <button className='mt-5 text-xl font-bold bg-sky-500 hover:bg-sky-800 translate-y-0.5 hover:translate-y-0 text-white rounded-xl shadow-black p-3'>Conocer mas</button>
                </div>
            </div>
            <div className='shadow-xl text-center flex flex-col w-80 h-auto p-2 bg-white rounded-xl border-2 border-slate-300 hover:border-indigo-600 hover:shadow-2xl'>
                {/* imagen */}
                <div className='shadow mb-2'>
                    <img src="/img/dashboard.jpeg" alt="imagen del dashboard" />
                </div>
                {/* descripcion */}
                <div className='items-center h-auto'>
                    <p className='text-xl font-bold text-slate-800'>Gantt</p>
                    <p className='text-lg text-slate-600'>
                      Desarrolle un plan de trabajo con tiempos,costos y cumplimientos con este modulo,
                      obtendra una alineacion de las actividades o tareas en funcion del tiempo</p>
                    <button className='mt-5 text-xl font-bold bg-sky-500 hover:bg-sky-800 translate-y-0.5 hover:translate-y-0 text-white rounded-xl shadow-black p-3'>Conocer mas</button>
                </div>
            </div>
        </div>
        {/* contactenos */}

        <div id='contactenos' className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contactanos</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">Envianos tu contacto y nos comunicaremos con tu empresa lo mas pronto posible</p>
  </div>
  <form onSubmit={handlesubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Nombres</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Apellidos</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Empresa</label>
        <div className="mt-2.5">
          <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Correo</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Numero telefonico</label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">Country</label>
            <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option >CO</option>
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"  />
            </svg>
          </div>
          <input type="number" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Mensaje</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          
          <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label" >
            <span className="sr-only">Politica de pribacidad</span>
          
            <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
          Tratamiento de datos    
          <a href="#" className="font-semibold text-indigo-600">privacidad&nbsp;politica</a>.
        </label>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Contactame
        </button>
    </div>
  </form>
</div>
    </main>
    <footer className='md:w-full h-auto bg-[url(/img/footer2.png)] bg-cover grid place-items-center md:p-20 p-3'>
      <div className='md:w-1/2 h-auto flex md:flex-row flex-col text-rigth items-center content-center mt-10 gap-2'>
        <div className='md:w-1/2 h-auto flex flex-col p-1'>
          <p className='text-xl font-bold text-white'>Todos los derechos reservados 2023</p>
          <img src="/img/Logo-Negro.png" alt="logo de empresa creadora syprod" className='w-32 h-32'/>
          <p className='text-sm font-bold text-white'>Desarrollado por SYPROD</p>
          <p className='text-xl font-bold text-white'>Equipo de trabajo</p>
          <p className='text-sm font-bold text-white'>Bayron meneses</p>
          <p className='text-sm font-bold text-white'>Brandon Arbelaez</p>
        </div>
        <div className='md:w-1/2  h-auto flex flex-col p-2'>
        <p className='text-sm font-bold text-white'>Contactenos a nuestras lineas telefonicas</p>
        <p className='text-sm font-bold text-white'>+57 3184482848</p>
        <p className='text-sm font-bold text-white'>+57 3103758820</p>
        <p className='text-sm font-bold text-white'>Correos autorizados</p>
        <p className='text-sm font-bold text-white'>baironmenesesidarraga.990128@gmail.com</p>
        <p className='text-sm font-bold text-white'>syprods@syprods.com</p>

      </div>
      </div>
     
    </footer>
    
    </>
  )
}
