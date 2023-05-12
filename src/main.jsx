import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {BpsystemProvider} from './context/BpsystemProvider.jsx'
import router from './Router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BpsystemProvider>
      <RouterProvider router={router} />
    </BpsystemProvider>
  </React.StrictMode>,
)
