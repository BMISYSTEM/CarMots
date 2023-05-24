import React from 'react'

export default function LoadingAside() {
  return (
    <>
    <aside className={`md:w-1/12 md:h-screen   overflow-hidden flex flex-col
           border-slate-200
            backdrop-blur-sm shadow-xl ml-px border-r-2 p-3  items-center gap-4 `}>
                <div className='h-1/6 w-full'></div>
        <div className='  w-full h-10 bg-slate-400 rounded-xl animate-pulse'></div>
        <div className=' block w-full h-10 bg-slate-400 rounded-xl animate-pulse'></div>
        <div className='block w-full h-10 bg-slate-400 rounded-xl animate-pulse'></div>
        <div className='block w-full h-10 bg-slate-400 rounded-xl animate-pulse'></div>
        <div className=' block w-full h-10 bg-slate-400 rounded-xl animate-pulse'></div>
    </aside>
    </>
  )
}
