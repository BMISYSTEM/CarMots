import React from 'react'
import LoadingAside from './LoadingAside'

export default function LoadingPanel() {
  return (
    <>
    <div className='w-full h-screen '>
    <div className={`"bg-white border-slate-200 flex md:flex-row flex-col h-screen w-auto overflow-hidden`}>
      {/* aca va la barra  */}
        <LoadingAside />
      <main className={`h-full w-screen md:mx-5 bg-white md:my-0 my-14 overflow-auto`}>
        <header className={` border-slate-200 w-full h-16 flex flex-row gap-5 shadow rounded-lg border-b-2  mt-2`}>
         
        <div className='m-2 flex flex-col w-20 h-10 relative bg-slate-500 rounded-lg p-1 '>
                            
        </div>
        <div className='m-2 flex flex-col w-20 h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            
        </div>
        <div className='m-2 flex flex-col w-20 h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            
        </div>
        <div className='m-2 flex flex-col w-20 h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            
        </div>

        </header>
        <div className={`  border-slate-200 w-full  h-5/6 mt-5 shadow-sm  rounded-lg flex flex-row `}>
            <div className='md:grid md:grid-rows md:gap-2 md:mx-2 md:my-1  h-full md:w-3/5 rounded-xl shadow p-3 flex flex-col '>
                <div className=' w-full h-full m-0 rounded-xl  flex md:flex-row gap-2 flex-col'>
                    <div className='md:m-1 md:w-1/2 md:h-11/12 rounded-xl  border-solid border-2 border-slate-200 w-full'>
                        <h2 
                        className='text-center font-bold  text-xl'
                        >
                        
                        </h2>
                        <div className='m-2 flex flex-col  h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            
                        </div>
                        <div className='m-2 flex flex-col h-10  relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            
                        </div>
                        <div className='m-2 flex flex-col h-10  relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            
                        </div>
                        <div className='m-2 flex flex-col h-10  relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            {/* documentos */}
                        </div>
                    </div>
                    <div className={`bg-slate-500 border-slate-200
                    m-1 md:w-1/2 w-full h-11/12 rounded-xl  px-1 overflow-auto border-solid border-2 animate-pulse`}>
                        {/* financiar */}
                        
                    </div>
                </div>
                    <div className={`bg-slate-500 border-slate-200
                    w-full h-full m-1 rounded-xl shadow flex md:flex-row flex-col gap-1 animate-pulse`}>
                        {/* imagengrande */}
                    </div>
                    <div className={`bg-slate-500 border-slate-200
                    h-auto md:w-1/6 w-full  m-1 rounded-xl flex md:flex-col flex-row items-center pt-1 gap-1 border-solid border-2 animate-pulse`}>
                    
                        {/* imagenes */}

                    </div>
                    <div className={`bg-slate-500 border-slate-200
                    h-auto md:w-1/3 w-full  m-1 rounded-xl flex flex-col gap-2 p-2 font-bold border-solid border-2 animate-pulse`}>
                    
                        {/* datos carro */}

                    </div>

            </div>
            <div className={` border-slate-200
                md:w-2/5 w-full md:h-auto h-full m-2 rounded-xl shadow `}>
                <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                            
                    </div>
                    <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                        
                    </div>
                    <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                        
                    </div>
                    <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                        {/* documentos */}
                    </div>
                    <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                        {/* documentos */}
                    </div>
                    <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                        {/* documentos */}
                    </div>
                    <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                        {/* documentos */}
                    </div>
                    <div className='m-2 flex flex-col h-10 relative bg-slate-500 rounded-lg p-1 animate-pulse'>
                        {/* documentos */}
                    </div>
                    
            </div>
        </div>
      </main>

    </div>
    </div>
   
   
    
   
  </>
  )
}
