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
import Project from './OpctionNav/Project'
import Vendidos from './OpctionNav/Submenus/Vendidos'
import Pendientes from './OpctionNav/Submenus/Pendientes'
import Aprobados from './OpctionNav/Submenus/Aprobados'
import Modelos from './OpctionNav/Submenus/Modelos'
import Vehiculos from './OpctionNav/Submenus/Vehiculos'
import Estados from './OpctionNav/Submenus/Estados'
import ListaUsuarios from './OpctionNav/Submenus/ListaUsuarios'
import Cartmots from './views/Cartmots'
import Seguimientolista from './OpctionNav/Submenus/seguimiento/Seguimientolista'
import Asesorios from './OpctionNav/Submenus/Asesorios'

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <Cartmots />
        },
        {
            path:'/login',
            element:<AuthLayout />
            ,children:[
            {
                path:'/login',
                element:<Login />
            }]
        },
        {
            path:'/registro',
            element:<Registro />
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
                    path:'/panel/dashboard/seguimiento',
                    element: <Seguimientolista />
                },
                {
                    path:'/panel/dashboard/pendientes',
                    element: <Pendientes />
                },
                {
                    path:'/panel/dashboard/aprobados',
                    element: <Aprobados />
                },
                {
                    path:'/panel/administrador',
                    element: <Administrador/>
                },
                {
                    path:'/panel/project',
                    element: <Project/>
                },
                {
                    path:'/panel/Usuarios',
                    element: <ListaUsuarios/>
                },
                {
                    path:'/panel/Usuarios/list',
                    element: <Usuarios/>
                },
                {
                    path:'/panel/ajustes/marcas',
                    element: <Marcas />
                },
                {
                    path:'/panel/ajustes/modelos',
                    element: <Modelos />
                },
                {
                    path:'/panel/ajustes/vehiculos',
                    element: <Vehiculos/>
                },
                {
                    path:'/panel/ajustes/asesorios',
                    element: <Asesorios/>
                },
                {
                    path:'/panel/ajustes/estados',
                    element: <Estados/>
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