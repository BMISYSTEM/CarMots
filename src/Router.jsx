import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout'
import Login from './views/Login'
import Registro from './views/Registro'
import Panel from './Layouts/Panel'
import Dashboard from './OpctionNav/Dashboard'
import Administrador from './OpctionNav/Administrador'
import Usuarios from './OpctionNav/Usuarios'
import Ajustes from './OpctionNav/Ajustes'
import Campanas from './OpctionNav/Campanas'
import Contabilidad from './OpctionNav/Contabilidad'
import Transferencias from './OpctionNav/Transferencia'
import Proveedor from './OpctionNav/Proveedor'
import Recepcion from './OpctionNav/Recepcion'
import Marcas from './OpctionNav/Submenus/Marcas'

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <AuthLayout />,
            children:[
                {
                path:'/',
                element:<Login />
                },
                {
                path:'/registro',
                element:<Registro />
                },
            ]

        },
        {
            path:'/panel',
            element:<Panel />,
            children:[
                {
                    path:'/panel/dashboard',
                    element: <Dashboard />
                },
                {
                    path:'/panel/administrador',
                    element: <Administrador/>
                },
                {
                    path:'/panel/Usuarios',
                    element: <Usuarios/>
                },
                {
                    path:'/panel/ajustes/marcas',
                    element: <Marcas />
                },
                {
                    path:'/panel/ajustes/modelos',
                    element: <Ajustes/>
                },
                {
                    path:'/panel/ajustes/vehiculos',
                    element: <Ajustes/>
                },
                {
                    path:'/panel/ajustes/estados',
                    element: <Ajustes/>
                },
                {
                    path:'/panel/ajustes/financieras',
                    element: <Ajustes/>
                },
                {
                    path:'/panel/ajustes/creditos',
                    element: <Ajustes/>
                },
                {
                    path:'/panel/campanas',
                    element: <Campanas/>
                },
                {
                    path:'/panel/contabilidad',
                    element: <Contabilidad/>
                },
                {
                    path:'/panel/transferencia',
                    element: <Transferencias/>
                },
                {
                    path:'/panel/proveedor',
                    element: <Proveedor/>
                },
                {
                    path:'/panel/recepcion',
                    element: <Recepcion/>
                },
               
            ]
        }
    ]
)


export default router