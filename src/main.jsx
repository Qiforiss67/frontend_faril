import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Welcome from './Welcome.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signinpeserta from './Signinpeserta.jsx'
import Loginpeserta from './Loginpeserta.jsx'
import Errorpage from './Errorpage.jsx'
import Homepage from './Homepage.jsx'
import Landingpage from './Landingpage.jsx'
import Webinarpage from './Detailevent.jsx'
import Adminpage from './admin/Homepage.jsx'
import Uploadevent from './admin/Uploadevent.jsx'
import Updateevent from './admin/Updateevent.jsx'
import Loginadmin from './admin/Loginadmin.jsx'


const router = createBrowserRouter([
  {
    path: "/Welcome",
    element: <Welcome/>,
    
  },
  {
    path: "/Homepage",
    element: <Homepage/>,
    
  },
  {
    path: "/Signinpeserta",
    element: <Signinpeserta/>,
  },
  {
    path:"/Loginpeserta",
    element: <Loginpeserta/>,
  },
  {
    
    path:"/",
    element: <Landingpage/>,
    errorElement: <Errorpage/>,
  },
  {
    path:"/Webinar",
    element: <Webinarpage/>
  },
  {
    path:"/Admin",
    element:<Adminpage/>
  },
  {
    path:"/Upload",
    element:<Uploadevent/>,
  },
  {
    path:"/Update",
    element:<Updateevent/>
  },
  {
    path: "/Loginadmin",
    element:<Loginadmin/>
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
