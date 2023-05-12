import React from 'react'
import useBpsystem from '../hooks/useBpsystem'

export default function ModalUsuario() {
    const {componente,handleClickModalUsuario} = useBpsystem()
 
            return(
                <>
                    <div className='w-96 h-full  flex flex-col p-o'>
                    <div className="flex justify-end">
                        <button type="button"
                                onClick={() => handleClickModalUsuario()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                        <div>
                            <p>usuarios</p>
                        </div>
                        <div>
                            <p>Vehiculo</p>

                        </div>
                    </div>
                
                
                </>
            )
         
    
}
