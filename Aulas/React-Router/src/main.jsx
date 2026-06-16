import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
  Router, Navigate

} from 'react-router-dom'

import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'
import Info from './routes/Info.jsx'
import Search from './routes/Search.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Componente base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      // Rota dinamica
      {
        path:"products/:id",
        element: <Products/>
      },
      // Rota dinamica

      {
        path: "products/:id/info",
        element: <Info/>,
      },

      {
        path: "search",
        element: <Search/>,
      },
      {
        path: "teste",
        element: <Navigate to={"/"}/>
      }
    ]
  },




  // {
  //   path: "contact",
  //   element: <Contact/>,
  // }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
